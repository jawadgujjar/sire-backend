const mongoose = require('mongoose');

const blogAuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogAuthor', blogAuthorSchema);
