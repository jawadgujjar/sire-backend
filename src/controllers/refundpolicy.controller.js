const RefundPolicy = require('../models/refundpolicy.model');

// Create or overwrite refund policy document
exports.createOrUpdateRefundPolicy = async (req, res) => {
  try {
    const { policies } = req.body;

    if (!policies || !Array.isArray(policies) || policies.length === 0) {
      return res.status(400).json({ message: 'Policies (array) required' });
    }

    // We only keep one refund policy document, so overwrite or create it
    let refundPolicy = await RefundPolicy.findOne();
    if (refundPolicy) {
      refundPolicy.policies = policies;
      await refundPolicy.save();
    } else {
      refundPolicy = new RefundPolicy({ policies });
      await refundPolicy.save();
    }

    res.status(200).json(refundPolicy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get refund policy document
exports.getRefundPolicy = async (req, res) => {
  try {
    const refundPolicy = await RefundPolicy.findOne();
    if (!refundPolicy) return res.status(404).json({ message: 'No refund policy found' });
    res.json(refundPolicy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete refund policy document completely
exports.deleteRefundPolicy = async (req, res) => {
  try {
    const deleted = await RefundPolicy.findOneAndDelete();
    if (!deleted) return res.status(404).json({ message: 'No refund policy to delete' });
    res.json({ message: 'Refund policy deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
