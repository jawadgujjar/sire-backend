const Joi = require('joi');

const createBlogCategorySchema = Joi.object({
  name: Joi.string().trim().required(),
  seoTitle: Joi.string(),
  seoDescription: Joi.string(),
});

const updateBlogCategorySchema = Joi.object({
  name: Joi.string().trim().required(),
  seoTitle: Joi.string(),
  seoDescription: Joi.string(),
});

module.exports = {
  createBlogCategorySchema,
  updateBlogCategorySchema,
};
