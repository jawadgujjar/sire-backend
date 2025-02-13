// routes/products.route.js
const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/products.validation');
const productController = require('../../controllers/products.controller');

const router = express.Router();

// POST - Create a new product
router
  .route('/')
  .post(validate(productValidation.createProduct), productController.createProductHandler)
  .get(productController.getAllProductsHandler); // Get all products

// GET - Get product by ID
router
  .route('/:id')
  .get(validate(productValidation.getProductById), productController.getProductByIdHandler)
  .patch(validate(productValidation.updateProduct), productController.updateProductHandler)
  .delete(validate(productValidation.deleteProduct), productController.deleteProductHandler);

// GET - Get products by category
router.route('/category/:category').get(productController.getProductByCategoryHandler); // Get products by category

module.exports = router;
