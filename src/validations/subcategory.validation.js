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

const createSubCategory = Joi.object({
  title: Joi.string().required().max(100),
  image: Joi.string().required().uri(),
  pageImage: Joi.string().optional().uri(),
  description: Joi.string().optional().max(1000),
  detailTitle: Joi.string().optional().max(200),
  detailSubtitle: Joi.string().optional().max(200),
  seoTitle: Joi.string().optional().max(150),
  seoKeyword: Joi.string().optional().max(200),
  seoDescription: Joi.string().optional().max(500),
  categoryId: Joi.string().required().custom(objectId, 'ObjectId Validation'),
  details: detailsSchema.optional(),
});

const updateSubCategory = Joi.object({
  title: Joi.string().optional().max(100),
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
