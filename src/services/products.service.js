const Product = require('../models/products.model');

const createProduct = async (data) => {
  return Product.create(data);
};

const getProductById = async (id) => {
  const product = await Product.findById(id).populate('categories subcategories').lean(); // Convert to plain JS object

  if (!product) {
    throw new Error('Product not found');
  }

  // Ensure variants array exists (even if empty)
  product.variants = product.variants || [];

  return product;
};

const getProductsByCategoryId = async (categoryId) => {
  return Product.find({ categories: categoryId });
};

const getProductsBySubCategoryId = async (subCategoryId) => {
  return Product.find({ subcategories: subCategoryId });
};

const updateProductById = async (productId, updateBody) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error('Product not found');
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteProductById = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductById,
  getProductsByCategoryId,
  getProductsBySubCategoryId,
  updateProductById,
  deleteProductById,
};
