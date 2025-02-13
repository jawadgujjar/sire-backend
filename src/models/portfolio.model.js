const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique SKUs

// Portfolio Schema
const portfolioSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true, // Category of the portfolio item (e.g., Web Design, Graphic Design)
    },
    image: {
      type: String, // Image URL or path for the portfolio item
      required: true,
    },
    productName: {
      type: String,
      required: true, // Name of the product or project
    },
    seoTitle: {
      type: String, // SEO title for the product
      required: false, // SEO title is optional
    },
    seoKeyword: {
      type: String, // SEO keywords for the product (comma-separated keywords)
      required: false, // SEO keywords are optional
    },
    seoDescription: {
      type: String, // SEO description for the product
      required: false, // SEO description is optional
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
