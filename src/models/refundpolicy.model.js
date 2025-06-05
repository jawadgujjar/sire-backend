const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const refundPolicySchema = new mongoose.Schema(
  {
    policies: [policySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('RefundPolicy', refundPolicySchema);
