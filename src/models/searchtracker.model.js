const mongoose = require('mongoose');

// Search Tracker Schema
const searchTrackerSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    userIP: {
      type: String, // Optional: User ka IP address track karne ke liye
      required: false,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true } // Automatically createdAt & updatedAt add karega
);

// Search Tracker Model
const SearchTracker = mongoose.model('SearchTracker', searchTrackerSchema);

module.exports = SearchTracker;
