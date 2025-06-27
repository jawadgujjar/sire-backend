const express = require('express');

const router = express.Router();
const NavItem = require('../../models/navitems.model');
const Category = require('../../models/category.model');

// ✅ Create a new NavItem
router.post('/', async (req, res) => {
  try {
    const { categories, isActive = true, position = 0 } = req.body;

    // ✅ Verify category IDs exist
    const existingCategories = await Category.find({ _id: { $in: categories } });
    if (existingCategories.length !== categories.length) {
      return res.status(400).json({ error: 'One or more categories not found' });
    }

    const navItem = new NavItem({ categories, isActive, position });
    await navItem.save();
    res.status(201).json(navItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get all NavItems with populated categories
router.get('/', async (req, res) => {
  try {
    const navItems = await NavItem.find()
      .populate('categories', 'title image slug') // Only send necessary fields
      .sort('position');

    res.json(navItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get a single NavItem
router.get('/:id', async (req, res) => {
  try {
    const navItem = await NavItem.findById(req.params.id).populate('categories', 'title image slug');
    if (!navItem) {
      return res.status(404).json({ error: 'NavItem not found' });
    }
    res.json(navItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update a NavItem
router.put('/:id', async (req, res) => {
  try {
    const { categories, isActive, position } = req.body;

    // ✅ If categories are passed, validate them
    if (categories) {
      const existingCategories = await Category.find({ _id: { $in: categories } });
      if (existingCategories.length !== categories.length) {
        return res.status(400).json({ error: 'One or more categories not found' });
      }
    }

    const navItem = await NavItem.findByIdAndUpdate(
      req.params.id,
      { categories, isActive, position },
      { new: true, runValidators: true }
    ).populate('categories', 'title image');

    if (!navItem) {
      return res.status(404).json({ error: 'NavItem not found' });
    }
    res.json(navItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Delete a NavItem
router.delete('/:id', async (req, res) => {
  try {
    const navItem = await NavItem.findByIdAndDelete(req.params.id);
    if (!navItem) {
      return res.status(404).json({ error: 'NavItem not found' });
    }
    res.json({ message: 'NavItem deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update NavItem Positions (for drag/drop reordering)
router.post('/update-positions', async (req, res) => {
  try {
    const { items } = req.body;

    const bulkOps = items.map((item) => ({
      updateOne: {
        filter: { _id: item.id },
        update: { position: item.position },
      },
    }));

    await NavItem.bulkWrite(bulkOps);
    res.json({ message: 'Positions updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
