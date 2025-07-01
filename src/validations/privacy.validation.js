const Joi = require('joi');

// Validation schema for creating Privacy section
const createPrivacy = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().max(255)).required(), // Array of strings with max length
    description: Joi.array().items(Joi.string()).required(), // Array of strings
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
  }),
};

// Validation schema for updating Privacy section
const updatePrivacy = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().max(255)), // Optional array of strings
    description: Joi.array().items(Joi.string()), // Optional array of strings
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
  }),
};

module.exports = {
  createPrivacy,
  updatePrivacy,
};
