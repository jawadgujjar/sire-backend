// services/product.service.js
const Product = require('../models/products.model');

// Create a new product
const createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

// Get all products
const getAllProducts = async () => {
  return Product.find();
};

// Get a product by ID
const getProductById = async (productId) => {
  return Product.findById(productId);
};

// Update a product
const updateProduct = async (productId, updateData) => {
  return Product.findByIdAndUpdate(productId, updateData, { new: true });
};

// Delete a product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

// Get products by category
const getProductsByCategory = async (categoryId) => {
  return Product.find({ category: categoryId });
};
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
