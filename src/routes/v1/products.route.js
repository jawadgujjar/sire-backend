const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/products.validation');
const productController = require('../../controllers/products.controller');

const router = express.Router();

// POST - Create a new product (including details like related products, descriptions)
router
  .route('/')
  .post(validate(productValidation.createProduct), productController.createProductHandler)
  .get(productController.getAllProductsHandler);
router.get('/all-products', productController.getAllProductsFromCategories);

// GET - Get product by ID
router
  .route('/:id')
  .get(validate(productValidation.getProductById), productController.getProductByIdHandler)
  .patch(validate(productValidation.updateProduct), productController.updateProductHandler)
  .delete(validate(productValidation.deleteProduct), productController.deleteProductHandler);

// GET - Get products by category (NEW route)
router
  .route('/category/:category')
  .get(validate(productValidation.getProductByCategory), productController.getProductByCategoryHandler);

module.exports = router;
