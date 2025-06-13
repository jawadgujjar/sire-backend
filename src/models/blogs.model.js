const mongoose = require('mongoose');

const tablePointSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    points: [{ type: String }],
  },
  { _id: false }
);

const detailSchema = new mongoose.Schema(
  {
    detailTitle: { type: String, default: '' },
    detailDescription: { type: String, default: '' },
    images: [{ type: String }],
    table: [tablePointSchema],
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    blogAuthor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogAuthor',
      required: true,
    },
    blogCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogCategory',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    details: [detailSchema],
    hasCarousel: {
      type: Boolean,
      default: false,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
