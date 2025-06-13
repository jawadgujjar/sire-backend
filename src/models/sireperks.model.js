const mongoose = require('mongoose');

// Perk Schema
const perkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Can store the file path or URL for the image
      required: true,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true }
);

// Perk Model
const Perk = mongoose.model('Perk', perkSchema);

module.exports = Perk;
