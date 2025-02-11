const ProductCategory = require('../models/products.model'); // Assuming you renamed it to ProductCategory based on your model

// Create a new product
const createProduct = async (productData) => {
  const product = new ProductCategory(productData);
  return await product.save();
};

// Get all products
const getAllProducts = async () => {
  return await ProductCategory.find();
};

// Get a product by ID
const getProductById = async (id) => {
  return await ProductCategory.findById(id);
};

// Get products by category (updated to search by title, assuming title is the category name in your schema)
const getProductByCategory = async (category) => {
  return await ProductCategory.find({ 'title': category });
};

// Update a product by ID
const updateProduct = async (id, updatedData) => {
  return await ProductCategory.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete a product by ID
const deleteProduct = async (id) => {
  return await ProductCategory.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
};
