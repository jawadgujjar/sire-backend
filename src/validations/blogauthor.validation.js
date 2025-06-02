const Joi = require('joi');

const createBlogAuthorSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().allow('').optional(),
});

const updateBlogAuthorSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().allow('').optional(),
});

module.exports = {
  createBlogAuthorSchema,
  updateBlogAuthorSchema,
};
