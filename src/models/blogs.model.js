const mongoose = require('mongoose');

// Blog Detail Schema
const blogDetailSchema = new mongoose.Schema(
  {
    title: {
      type: String, // Title for each blog detail
      required: true,
    },
    description: {
      type: String, // Description for each blog detail
      required: true,
    },
    image: {
      type: String, // Image URL or file path for each blog detail
      required: true,
    },
  },
  { timestamps: true }
);

// Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Image URL or file path
      required: true,
    },
    description: {
      type: String, // Short description for the blog
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Category model
      ref: 'Category', // Referencing the 'Category' model
      required: true, // Ensuring each blog has a category
    },
    blogDetail: [
      blogDetailSchema, // Embedded blog detail schema as an array
    ],
  },
  { timestamps: true }
);

// Blog Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
