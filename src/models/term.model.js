const mongoose = require('mongoose');

// Term Schema
const termSchema = new mongoose.Schema(
  {
    title: {
      type: [String], // Array of titles
      required: true,
    },
    description: {
      type: [String], // Array of descriptions
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Term Model
const Term = mongoose.model('Term', termSchema);

module.exports = Term;
