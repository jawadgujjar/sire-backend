const Joi = require('joi');

// Validation for creating About Us section
const createAboutUs = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().max(255)).required(), // Array of strings for title, each max length 255
    description: Joi.array().items(Joi.string()).required(), // Array of strings for description
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
  }),
};

// Validation for updating About Us section
const updateAboutUs = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().max(255)), // Array of strings for title, each max length 255 (optional)
    description: Joi.array().items(Joi.string()), // Array of strings for description (optional)
  }),
};

module.exports = {
  createAboutUs,
  updateAboutUs,
};
