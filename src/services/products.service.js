const Product = require('../models/products.model');

// Create a new product
const createProduct = async (productData) => {
  const product = new Product(productData);
  return product.save(); // `await` hata diya
};

// Get all products
const getAllProducts = async () => {
  return Product.find(); // `await` hata diya
};

// Get a product by ID
const getProductById = async (productId) => {
  return Product.findById(productId); // `await` hata diya
};

// Update a product
const updateProduct = async (productId, updateData) => {
  return Product.findByIdAndUpdate(productId, updateData, { new: true }); // `await` hata diya
};

// Delete a product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId); // `await` hata diya
};

// Get products by category
const getProductsByCategory = async (categoryId) => {
  return Product.find({ category: categoryId }); // `await` hata diya
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
