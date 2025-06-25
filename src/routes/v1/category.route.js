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

// GET, PATCH, DELETE - Category by ID (MongoDB ObjectId only)
router
  .route('/:id([0-9a-fA-F]{24})') // Regex for 24-character hex MongoDB ObjectId
  .get(categoryController.getCategoryById) // Get category by ID
  .patch(validate(categoryValidation.updateCategory), categoryController.updateCategory) // Update category
  .delete(categoryController.deleteCategory); // Delete category by ID

// GET - Category by slug
router.route('/:slug').get(categoryController.getCategoryBySlug); // Get category by slug

// GET - Category by name
router.route('/name/:name').get(categoryController.getCategoryByName); // Get category by name

module.exports = router;
