// validations/blog.validation.js
const Joi = require('joi');

const createBlog = {
  body: Joi.object().keys({
    title: Joi.string().required(), // Single string for blog title
    description: Joi.string().required(), // Single string for blog description
    image: Joi.string().uri().required(), // Image URL or file path
    category: Joi.string().length(24).hex().required(), // Category ID as a valid ObjectId string (24 hex chars)
    blogDetail: Joi.array()
      .items(
        Joi.object().keys({
          title: Joi.string().required(), // Title for each blog detail
          description: Joi.string().required(), // Description for each blog detail
          image: Joi.string().uri().required(), // Image URL for each blog detail
        })
      )
      .required(), // Array of blog details is required
  }),
};

const updateBlog = {
  body: Joi.object().keys({
    title: Joi.string().optional(), // Optional title
    description: Joi.string().optional(), // Optional description
    image: Joi.string().uri().optional(), // Optional image URL
    category: Joi.string().length(24).hex().optional(), // Optional category ID as ObjectId string (24 hex chars)
    blogDetail: Joi.array()
      .items(
        Joi.object().keys({
          title: Joi.string().optional(), // Optional title for each blog detail
          description: Joi.string().optional(), // Optional description for each blog detail
          image: Joi.string().uri().optional(), // Optional image URL for each blog detail
        })
      )
      .optional(), // Optional blog details array
  }),
};

module.exports = {
  createBlog,
  updateBlog,
};
