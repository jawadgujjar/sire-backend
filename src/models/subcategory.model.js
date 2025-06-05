const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
    seoKeyword: {
      type: String,
      required: false,
    },
    seoDescription: {
      type: String,
      required: false,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
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

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
