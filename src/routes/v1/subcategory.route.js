const express = require('express');
const validate = require('../../middlewares/validate');
const subCategoryValidation = require('../../validations/subcategory.validation');
const subCategoryController = require('../../controllers/subcategory.controller');

const router = express.Router();

// POST - Create a new subcategory
router
  .route('/')
  .post(validate(subCategoryValidation.createSubCategory), subCategoryController.createSubCategory)
  .get(subCategoryController.getAllSubCategories);

// GET, PATCH, DELETE - Subcategory by ID (MongoDB ObjectId only)
router
  .route('/:id([0-9a-fA-F]{24})')
  .get(subCategoryController.getSubCategoryById)
  .patch(validate(subCategoryValidation.updateSubCategory), subCategoryController.updateSubCategory)
  .delete(subCategoryController.deleteSubCategory);

// GET - Subcategory by slug
router.route('/:categorySlug/:subCategorySlug').get(subCategoryController.getSubCategoryBySlug);

// GET - Subcategories by categoryId
router.route('/category/:categoryId').get(subCategoryController.getSubCategoriesByCategoryId);

module.exports = router;
