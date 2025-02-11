const Joi = require('joi');

// Portfolio Detail Validation Schema
const portfolioDetailSchema = Joi.object({
  images: Joi.array().items(Joi.string().uri()).required(), // Array of image URLs
});

// Product Detail Main Validation Schema
const productDetailMainSchema = Joi.object({
  images: Joi.array().items(Joi.string().uri()).required(),
  specifications: Joi.object({
    boxStyle: Joi.string().optional(),
    dimensions: Joi.string().optional(),
    quantity: Joi.number().optional(),
    includedOptions: Joi.string().optional(),
    additionalOptions: Joi.string().optional(),
    proof: Joi.string().optional(),
    shipping: Joi.string().optional(),
    preferredDesignFile: Joi.string().uri().optional(),
    assembling: Joi.string().optional(),
  }).optional(),
  relatedPortfolio: Joi.array().items(
    Joi.object({
      image: Joi.string().uri().required(),
      details: portfolioDetailSchema.required(),
    })
  ).optional(),
  stockType: Joi.array().items(
    Joi.object({
      image: Joi.string().uri().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    })
  ).optional(),
  finishingAssortment: Joi.array().items(
    Joi.object({
      image: Joi.string().uri().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    })
  ).optional(),
  productDescription: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
    })
  ).optional(),
});

// Product Detail Validation Schema
const productDetailSchema = Joi.object({
  image: Joi.string().uri().required(),
  titlerelatedProducts: Joi.array().items(
    Joi.object({
      image: Joi.string().uri().required(),
      title: Joi.string().required(),
      details: productDetailMainSchema.required(),
    })
  ).optional(),
  description: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
    })
  ).optional(),
});

// Validation schema for creating a new product
const createProduct = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
  // `category` is part of the category schema, not the root product schema.
  details: productDetailSchema.required(), // Ensures that the 'details' object is required
});

// Validation schema for getting a product by ID
const getProductById = Joi.object({
  id: Joi.string().required(), // The product ID should be provided
});

// Validation schema for updating a product
const updateProduct = Joi.object({
  title: Joi.string().optional(),
  image: Joi.string().uri().optional(),
  details: productDetailSchema.optional(), // Optionally updating the 'details'
});

// Validation schema for deleting a product
const deleteProduct = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
