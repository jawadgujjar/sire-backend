const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique SKUs

// Portfolio Schema
const portfolioSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // This must match the name used in your Product model export
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook to generate unique SKU if not provided
portfolioSchema.pre('save', function (next) {
  if (!this.sku) {
    this.sku = `SKU-${uuidv4().split('-')[0].toUpperCase()}`; // Generate a unique SKU
  }
  next();
});

// Portfolio Model
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
