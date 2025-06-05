// models/BlogCategory.js

const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogCategory', blogCategorySchema);
