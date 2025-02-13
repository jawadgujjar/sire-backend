const express = require('express');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

// POST - Create a new category
router
  .route('/')
  .post(validate(categoryValidation.createCategory), categoryController.createCategory) // Handle category creation
  .get(categoryController.getAllCategories); // Get all categories

// GET - Get category by ID
router
  .route('/:id')
  .get(categoryController.getCategoryById) // Get category by ID
  .patch(validate(categoryValidation.updateCategory), categoryController.updateCategory) // Update category
  .delete(categoryController.deleteCategory); // Delete category by ID

// GET - Get category by name
router
  .route('/name/:name')
  .get(categoryController.getCategoryByName); // Get category by name

module.exports = router;
