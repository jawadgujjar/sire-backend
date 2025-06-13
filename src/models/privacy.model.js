const mongoose = require('mongoose');

// Privacy Schema
const privacySchema = new mongoose.Schema(
  {
    title: {
      type: [String], // Array of titles
      required: true,
    },
    description: {
      type: [String], // Array of descriptions
      required: true,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Privacy Model
const Privacy = mongoose.model('Privacy', privacySchema);

module.exports = Privacy;
