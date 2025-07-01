const testimonialService = require('../services/testimonial.service');

/**
 * Create a new testimonial
 */
const createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await testimonialService.createTestimonial(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all testimonials
 */
const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await testimonialService.getAllTestimonials();
    res.json(testimonials);
  } catch (error) {
    next(error);
  }
};

/**
 * Get testimonial by ID
 */
const getTestimonialById = async (req, res, next) => {
  try {
    const testimonial = await testimonialService.getTestimonialById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    next(error);
  }
};

/**
 * Update testimonial by ID
 */
const updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete testimonial by ID
 */
const deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await testimonialService.deleteTestimonial(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
