const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const productService = require('../services/products.service');
const Product = require('../models/products.model');

const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('categories subcategories');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  res.send(product);
});

const getProductsByCategory = catchAsync(async (req, res) => {
  const products = await productService.getProductsByCategoryId(req.params.categoryId);
  res.send(products);
});

const getProductsBySubCategory = catchAsync(async (req, res) => {
  const products = await productService.getProductsBySubCategoryId(req.params.subCategoryId);
  res.send(products);
});
const getProductBySlug = catchAsync(async (req, res) => {
  const { categorySlug, subCategorySlug, productSlug } = req.params;
  const product = await productService.getProductBySlugService(categorySlug, subCategorySlug, productSlug);
  res.status(httpStatus.OK).send(product);
});

const getProductByVariantSku = catchAsync(async (req, res) => {
  const { categorySlug, subCategorySlug, productSlug, variantSku } = req.params;
  const product = await productService.getProductByVariantSkuService(categorySlug, subCategorySlug, productSlug, variantSku);
  res.status(httpStatus.OK).send(product);
});
const updateProduct = catchAsync(async (req, res) => {
  const updated = await productService.updateProductById(req.params.productId, req.body);
  res.send(updated);
});

const deleteProduct = catchAsync(async (req, res) => {
  await productService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductBySlug,
  getProductByVariantSku,
  updateProduct,
  deleteProduct,
};
