const Joi = require('joi');

const createBlogAuthorSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().allow('').optional(),
  seoTitle: Joi.string(),
  seoDescription: Joi.string(),
});

const updateBlogAuthorSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().allow('').optional(),
  seoTitle: Joi.string(),
  seoDescription: Joi.string(),
});

module.exports = {
  createBlogAuthorSchema,
  updateBlogAuthorSchema,
};
