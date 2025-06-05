const Joi = require('joi');

const createTestimonial = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
    description: Joi.string().required(),
    clientImage: Joi.string().uri().required(), // Ensure valid URL format
  }),
};

const updateTestimonial = {
  body: Joi.object().keys({
    name: Joi.string(),
    rating: Joi.number().min(1).max(5),
    description: Joi.string(),
    clientImage: Joi.string().uri(),
  }),
};

module.exports = {
  createTestimonial,
  updateTestimonial,
};
