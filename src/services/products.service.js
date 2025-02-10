const Product = require('../models/products.model');

// Create a new product
const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// Get all products
const getAllProducts = async () => {
  return await Product.find();
};

// Get a product by ID
const getProductById = async (id) => {
  return await Product.findById(id);
};

// Get products by category
const getProductByCategory = async (category) => {
  return await Product.find({ category: category });
};

// Update a product by ID
const updateProduct = async (id, updatedData) => {
  return await Product.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete a product by ID
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
};
