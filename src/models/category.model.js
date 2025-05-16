const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageMain: {
      type: String,
      required: false,
    },
    seoTitle: {
      type: String,
      required: false,
    },
    seoKeyword: {
      type: String,
      required: false,
    },
    seoDescription: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
