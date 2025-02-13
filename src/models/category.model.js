const mongoose = require('mongoose');

// Category Schema (For category title, image, and SEO fields)
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
    },
    image: {
      type: String, // Image can store file path or URL for the category image
      required: true, // Image is required
    },
    seoTitle: {
      type: String, // SEO title for the category (usually displayed in the title tag of the page)
      required: false, // SEO title is optional
    },
    seoKeyword: {
      type: String, // SEO keywords for the category (comma-separated keywords)
      required: false, // SEO keywords are optional
    },
    seoDescription: {
      type: String, // SEO description for the category (description of the page content)
      required: false, // SEO description is optional
    },
  },
  { timestamps: true }
); // Timestamps for createdAt and updatedAt

// Category Model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
