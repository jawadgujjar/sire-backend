const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/products.validation');
const productController = require('../../controllers/products.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(productValidation.createProduct), productController.createProduct)
  .get(productController.getAllProducts);

router
  .route('/:productId')
  .get(validate(productValidation.getProductById), productController.getProduct)
  .patch(validate(productValidation.updateProduct), productController.updateProduct)
  .delete(validate(productValidation.deleteProduct), productController.deleteProduct);

router
  .route('/category/:categoryId')
  .get(validate(productValidation.getByCategoryId), productController.getProductsByCategory);

router
  .route('/subcategory/:subCategoryId')
  .get(validate(productValidation.getBySubCategoryId), productController.getProductsBySubCategory);

router.route('/:categorySlug/:subCategorySlug/:productSlug').get(productController.getProductBySlug);

router.route('/:categorySlug/:subCategorySlug/:productSlug/:variantSlug').get(productController.getProductByVariantSlug);
module.exports = router;
