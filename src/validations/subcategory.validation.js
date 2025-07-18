const Joi = require('joi');
const mongoose = require('mongoose');

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('"{{#label}}" must be a valid ObjectId');
  }
  return value;
};

const detailsSchema = Joi.array().items(
  Joi.object({
    detailDescription: Joi.string().optional().max(1000),
    image: Joi.string().optional().uri(),
  })
);

const slugSchema = Joi.string()
  .regex(/^[a-z0-9/-]+$/)
  .messages({
    'string.pattern.base':
      'Slug must be lowercase, alphanumeric, and can include hyphens and slashes (e.g., category/subcategory).',
  });

const createSubCategory = Joi.object({
  title: Joi.string().required(),
  slug: slugSchema.required(),
  image: Joi.string().uri(),
  pageImage: Joi.string().optional().uri(),
  description: Joi.string().optional(),
  detailTitle: Joi.string().optional(),
  detailSubtitle: Joi.string().optional(),
  seoTitle: Joi.string().optional(),
  seoDescription: Joi.string().optional(),
  categoryId: Joi.string().required().custom(objectId, 'ObjectId Validation'),
  details: detailsSchema.optional(),
});

const updateSubCategory = Joi.object({
  title: Joi.string().optional().max(100),
  slug: slugSchema.optional(),
  image: Joi.string().optional().uri(),
  pageImage: Joi.string().optional().uri(),
  description: Joi.string().optional().max(1000),
  detailTitle: Joi.string().optional().max(200),
  detailSubtitle: Joi.string().optional().max(200),
  seoTitle: Joi.string().optional().max(150),
  seoKeyword: Joi.string().optional().max(200),
  seoDescription: Joi.string().optional().max(500),
  categoryId: Joi.string().optional().custom(objectId, 'ObjectId Validation'),
  details: detailsSchema.optional(),
});

module.exports = {
  createSubCategory,
  updateSubCategory,
};
