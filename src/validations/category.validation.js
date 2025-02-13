const Joi = require('joi');

const createCategory = Joi.object({
  title: Joi.string().required().max(100),  // Title is required and must be a string with max length 100
  image: Joi.string().required().uri(),     // Image URL or file path is required and must be a valid URI
  seoTitle: Joi.string().optional().max(150), // SEO title is optional, and max length is 150
  seoKeyword: Joi.string().optional().max(200), // SEO keywords are optional, and max length is 200
  seoDescription: Joi.string().optional().max(500), // SEO description is optional, and max length is 500
});

const updateCategory = Joi.object({
  title: Joi.string().optional().max(100),     // Title is optional for updates
  image: Joi.string().optional().uri(),        // Image is optional for updates
  seoTitle: Joi.string().optional().max(150),  // SEO title is optional for updates
  seoKeyword: Joi.string().optional().max(200), // SEO keywords are optional for updates
  seoDescription: Joi.string().optional().max(500), // SEO description is optional for updates
});

module.exports = {
  createCategory,
  updateCategory,
};
