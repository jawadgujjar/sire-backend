const Joi = require('joi');

// Validation schema for creating a new product
const createProduct = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
  category: Joi.string().required(),
  details: Joi.object().required(), // Ensure that the 'details' object is required
});

// Validation schema for getting a product by ID
const getProductById = Joi.object({
  id: Joi.string().required(), // The product ID should be provided
});

// Validation schema for updating a product
const updateProduct = Joi.object({
  title: Joi.string().optional(),
  image: Joi.string().uri().optional(),
  category: Joi.string().optional(),
  details: Joi.object().optional(), // Optionally updating the 'details'
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
