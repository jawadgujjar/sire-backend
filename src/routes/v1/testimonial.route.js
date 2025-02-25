const express = require('express');
const validate = require('../../middlewares/validate');
const testimonialValidation = require('../../validations/testimonial.validation');
const testimonialController = require('../../controllers/testimonial.controller.');

const router = express.Router();

// POST - Create Testimonial & GET - List All Testimonials
router
  .route('/')
  .post(validate(testimonialValidation.createTestimonial), testimonialController.createTestimonial)
  .get(testimonialController.getAllTestimonials);

// GET, PATCH, DELETE - Testimonial by ID
router
  .route('/:id')
  .get(testimonialController.getTestimonialById)
  .patch(validate(testimonialValidation.updateTestimonial), testimonialController.updateTestimonial)
  .delete(testimonialController.deleteTestimonial);

module.exports = router;
