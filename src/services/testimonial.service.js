const Testimonial = require('../models/testimonial.model'); // Ensure correct path

/**
 * Create a new testimonial
 * @param {Object} testimonialBody
 * @returns {Promise<Testimonial>}
 */
const createTestimonial = async (testimonialBody) => Testimonial.create(testimonialBody);

/**
 * Get all testimonials
 * @returns {Promise<Testimonial[]>}
 */
const getAllTestimonials = async () => Testimonial.find();

/**
 * Get testimonial by ID
 * @param {String} testimonialId
 * @returns {Promise<Testimonial>}
 */
const getTestimonialById = async (testimonialId) => Testimonial.findById(testimonialId);

/**
 * Update testimonial by ID
 * @param {String} testimonialId
 * @param {Object} updateBody
 * @returns {Promise<Testimonial>}
 */
const updateTestimonial = async (testimonialId, updateBody) =>
  Testimonial.findByIdAndUpdate(testimonialId, updateBody, { new: true });

/**
 * Delete testimonial by ID
 * @param {String} testimonialId
 * @returns {Promise<Testimonial>}
 */
const deleteTestimonial = async (testimonialId) => Testimonial.findByIdAndDelete(testimonialId);

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
