const Profile = require('../models/profileaddress.model');

// CREATE
exports.createShippingAddress = async (req, res) => {
  try {
    const { userId, shippingAddress } = req.body;

    const existing = await Profile.findOne({ userId });
    if (existing) {
      return res.status(400).json({ message: 'Shipping address already exists for this user.' });
    }

    const profile = await Profile.create({ userId, shippingAddress });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ
exports.getShippingAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }
    res.json(profile.shippingAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateShippingAddress = async (req, res) => {
  try {
    const updated = await Profile.findOneAndUpdate(
      { userId: req.params.userId },
      { shippingAddress: req.body.shippingAddress },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

    res.json(updated.shippingAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteShippingAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

    profile.shippingAddress = undefined;
    await profile.save();

    res.json({ message: 'Shipping address deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
