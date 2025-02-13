// services/product.service.js
const Product = require('../models/products.model');

// Create a new product
const createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save(); // ✅ Yahan await theek jagah hai
  return product; // ✅ Sirf resolved object return karein
};

// Get all products
const getAllProducts = async () => {
  return Product.find(); // ✅ Await hataya, kyunki return ke andar zaroori nahi
};

// Get a product by ID
const getProductById = async (productId) => {
  return Product.findById(productId); // ✅ Await hataya
};

// Update a product
const updateProduct = async (productId, updateData) => {
  return Product.findByIdAndUpdate(productId, updateData, { new: true }); // ✅ Await hataya
};

// Delete a product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId); // ✅ Await hataya
};

// Get products by category
const getProductsByCategory = async (categoryId) => {
  return Product.find({ category: categoryId }); // ✅ Await hataya
};
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
