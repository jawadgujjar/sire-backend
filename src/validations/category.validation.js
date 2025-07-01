const Joi = require('joi');

const detailSchema = Joi.object({
  detailDescription: Joi.string().optional().max(1000),
  image: Joi.string().optional().uri(),
});

const createCategory = Joi.object({
  title: Joi.string().required(),
  slug: Joi.string()
    .regex(/^[a-z0-9/-]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Slug must be lowercase, alphanumeric, and can include hyphens or slashes.',
    }),
  image: Joi.string().uri(),
  pageImage: Joi.string().optional().uri(),
  description: Joi.string().optional(),
  detailTitle: Joi.string().optional(),
  detailSubtitle: Joi.string().optional(),
  seoTitle: Joi.string().optional(),
  seoDescription: Joi.string().optional(),
  details: Joi.array().items(detailSchema).optional(),
});

const updateCategory = Joi.object({
  title: Joi.string().optional().max(100),
  slug: Joi.string()
    .regex(/^[a-z0-9/-]+$/)
    .optional()
    .messages({
      'string.pattern.base': 'Slug must be lowercase, alphanumeric, and can include hyphens or slashes.',
    }),
  image: Joi.string().optional().uri(),
  pageImage: Joi.string().optional().uri(),
  description: Joi.string().optional().max(1000),
  detailTitle: Joi.string().optional().max(200),
  detailSubtitle: Joi.string().optional().max(200),
  seoTitle: Joi.string().optional().max(150),
  seoKeyword: Joi.string().optional().max(200),
  seoDescription: Joi.string().optional().max(500),
  details: Joi.array().items(detailSchema).optional(),
});

module.exports = { createCategory, updateCategory };
