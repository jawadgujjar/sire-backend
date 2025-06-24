const ApprovedDesign = require('../models/approveddesign.model');

// Create
exports.createDesign = async (req, res) => {
  try {
    const design = new ApprovedDesign(req.body);
    await design.save();
    res.status(201).json(design);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All
exports.getAllDesigns = async (req, res) => {
  try {
    const designs = await ApprovedDesign.find();
    res.json(designs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One
exports.getDesignById = async (req, res) => {
  try {
    const design = await ApprovedDesign.findById(req.params.id);
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateDesign = async (req, res) => {
  try {
    const design = await ApprovedDesign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteDesign = async (req, res) => {
  try {
    const result = await ApprovedDesign.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Design not found' });
    res.json({ message: 'Design deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
