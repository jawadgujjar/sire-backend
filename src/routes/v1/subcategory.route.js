const express = require('express');
const validate = require('../../middlewares/validate');
const subCategoryValidation = require('../../validations/subcategory.validation');
const subCategoryController = require('../../controllers/subcategory.controller');

const router = express.Router();

// POST - Create a new subcategory
router
  .route('/')
  .post(validate(subCategoryValidation.createSubCategory), subCategoryController.createSubCategory) // Create
  .get(subCategoryController.getAllSubCategories); // Get all

// GET - Get subcategory by ID, PATCH (update), DELETE
router
  .route('/:id')
  .get(subCategoryController.getSubCategoryById) // Get by ID
  .patch(validate(subCategoryValidation.updateSubCategory), subCategoryController.updateSubCategory) // Update
  .delete(subCategoryController.deleteSubCategory); // Delete

// ✅ GET - Get subcategories by categoryId
router.route('/category/:categoryId').get(subCategoryController.getSubCategoriesByCategoryId); // Get subcategories under a category

module.exports = router;
