// validations/blog.validation.js
const Joi = require('joi');

const createBlog = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    category: Joi.string().length(24).hex().required(),
    blogDetail: Joi.array()
      .items(
        Joi.object().keys({
          title: Joi.string().required(),
          description: Joi.string().required(),
          image: Joi.string().uri().required(),
        })
      )
      .required(),
  }),
};

const updateBlog = {
  body: Joi.object().keys({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    image: Joi.string().uri().optional(),
    category: Joi.string().length(24).hex().optional(),
    blogDetail: Joi.array()
      .items(
        Joi.object().keys({
          title: Joi.string().optional(),
          description: Joi.string().optional(),
          image: Joi.string().uri().optional(),
        })
      )
      .optional(),
  }),
};

const getBlogsByCategory = {
  params: Joi.object().keys({
    category: Joi.string().length(24).hex().required(),
  }),
};

module.exports = {
  createBlog,
  updateBlog,
  getBlogsByCategory,
};
