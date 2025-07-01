const express = require('express');
const validate = require('../../middlewares/validate');
const carouselImageValidation = require('../../validations/carouselimage.validation');
const carouselImageController = require('../../controllers/carouselimage.controller');

const router = express.Router();

// POST - Create a new carousel image entry
router
  .route('/')
  .post(validate(carouselImageValidation.createCarouselImage), carouselImageController.createCarouselImage)
  .get(carouselImageController.getAllCarouselImages); // Get all carousel images

// GET, UPDATE, DELETE - Carousel Image by ID
router
  .route('/:id')
  .get(carouselImageController.getCarouselImageById)
  .patch(validate(carouselImageValidation.updateCarouselImage), carouselImageController.updateCarouselImage)
  .delete(carouselImageController.deleteCarouselImage);

module.exports = router;
