const mongoose = require('mongoose');

// Carousel Image Schema
const carouselImageSchema = new mongoose.Schema(
  {
    images: [
      {
        type: String, // Image URLs
        required: true,
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Carousel Image Model
const CarouselImage = mongoose.model('CarouselImage', carouselImageSchema);

module.exports = CarouselImage;
