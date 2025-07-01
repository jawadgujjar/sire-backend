const mongoose = require('mongoose');

// Testimonial Schema
const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1, // Minimum rating
      max: 5, // Maximum rating
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    clientImage: {
      type: String, // URL for the image
      required: true,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Testimonial Model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
