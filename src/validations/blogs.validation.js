const Joi = require('joi');

const detailSchema = Joi.object({
  detailTitle: Joi.string().allow('').optional(),
  detailDescription: Joi.string().allow('').optional(),
  images: Joi.array().items(Joi.string()).optional(),
  table: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        points: Joi.array().items(Joi.string()).optional(),
      })
    )
    .optional(),
});

const createBlogSchema = Joi.object({
  blogAuthor: Joi.string().required(),
  blogCategory: Joi.string().required(),
  title: Joi.string().required(),
  image: Joi.string().required(),
  details: Joi.array().items(detailSchema).optional(),
  hasCarousel: Joi.boolean().optional(),
});

const updateBlogSchema = Joi.object({
  blogAuthor: Joi.string().required(),
  blogCategory: Joi.string().required(),
  title: Joi.string().required(),
  image: Joi.string().required(),
  details: Joi.array().items(detailSchema).optional(),
  hasCarousel: Joi.boolean().optional(),
  seoTitle: Joi.string(),
  seoDescription: Joi.string(),
});

module.exports = {
  createBlogSchema,
  updateBlogSchema,
};
