const CarouselImage = require('../models/carouselimage.model');

// Create a new Carousel Image entry
const createCarouselImage = async (data) => {
  return CarouselImage.create(data);
};

// Get all Carousel Images
const getAllCarouselImages = async () => {
  return CarouselImage.find();
};

// Get Carousel Image by ID
const getCarouselImageById = async (id) => {
  return CarouselImage.findById(id);
};

// Update Carousel Image
const updateCarouselImage = async (id, data) => {
  return CarouselImage.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Delete Carousel Image
const deleteCarouselImage = async (id) => {
  return CarouselImage.findByIdAndDelete(id);
};

module.exports = {
  createCarouselImage,
  getAllCarouselImages,
  getCarouselImageById,
  updateCarouselImage,
  deleteCarouselImage,
};
