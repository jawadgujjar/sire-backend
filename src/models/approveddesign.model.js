const mongoose = require('mongoose');

const approvedDesignSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    material: { type: String, required: true },
    quantity: { type: String, required: true },
    size: { type: String, required: true }, // e.g. 10x12x2
    file: { type: String, required: true }, // file URL or path
    approved: {
      type: String,
      enum: ['pending', 'approved', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ApprovedDesign', approvedDesignSchema);
