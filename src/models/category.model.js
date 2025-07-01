const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
    },
    pageImage: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    detailTitle: {
      type: String,
      required: false,
    },
    detailSubtitle: {
      type: String,
      required: false,
    },
    seoTitle: {
      type: String,
      required: false,
    },
    seoDescription: {
      type: String,
      required: false,
    },
    details: [
      {
        detailDescription: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
