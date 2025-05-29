const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const productService = require('../services/products.service');

const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});

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
  getProduct,
  getProductsByCategory,
  getProductsBySubCategory,
  updateProduct,
  deleteProduct,
};
