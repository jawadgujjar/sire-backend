const mongoose = require('mongoose');

// About Us Schema
const aboutUsSchema = new mongoose.Schema(
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

// About Us Model
const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
