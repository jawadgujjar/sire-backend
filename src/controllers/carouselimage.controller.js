const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const carouselImageService = require('../services/carouselimage.service');

// Create a new Carousel Image
const createCarouselImage = catchAsync(async (req, res) => {
  const carouselImage = await carouselImageService.createCarouselImage(req.body);
  res.status(httpStatus.CREATED).json(carouselImage);
});

// Get all Carousel Images
const getAllCarouselImages = catchAsync(async (req, res) => {
  const images = await carouselImageService.getAllCarouselImages();
  res.status(httpStatus.OK).json(images);
});

// Get a Carousel Image by ID
const getCarouselImageById = catchAsync(async (req, res) => {
  const image = await carouselImageService.getCarouselImageById(req.params.id);
  if (!image) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Carousel image not found' });
  }
  res.status(httpStatus.OK).json(image);
});

// Update a Carousel Image
const updateCarouselImage = catchAsync(async (req, res) => {
  const image = await carouselImageService.updateCarouselImage(req.params.id, req.body);
  if (!image) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Carousel image not found' });
  }
  res.status(httpStatus.OK).json(image);
});

// Delete a Carousel Image
const deleteCarouselImage = catchAsync(async (req, res) => {
  const image = await carouselImageService.deleteCarouselImage(req.params.id);
  if (!image) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Carousel image not found' });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCarouselImage,
  getAllCarouselImages,
  getCarouselImageById,
  updateCarouselImage,
  deleteCarouselImage,
};
