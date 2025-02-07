const express = require('express');
const auth = require('../../middlewares/auth'); // If you have authentication middleware
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/products.validation');
const productController = require('../../controllers/products.controller');

const router = express.Router();

// POST - Create a new product
router
  .route('/')
  .post(validate(productValidation.createProduct), productController.createProductHandler)
  .get(productController.getAllProductsHandler);

// GET - Get product by ID
router
  .route('/:id')
  .get(validate(productValidation.getProductById), productController.getProductByIdHandler)
  .patch(validate(productValidation.updateProduct), productController.updateProductHandler)
  .delete(validate(productValidation.deleteProduct), productController.deleteProductHandler);

module.exports = router;
