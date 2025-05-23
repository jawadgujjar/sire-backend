const express = require('express');

const router = express.Router();
const {
  createBlogCategory,
  getAllBlogCategories,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
} = require('../../controllers/blogcategory.controller');
const { createBlogCategorySchema, updateBlogCategorySchema } = require('../../validations/blogcategory.validation');

const validate = require('../../middlewares/validate');

// Create
router.post('/', validate(createBlogCategorySchema), createBlogCategory);

// Read All
router.get('/', getAllBlogCategories);

// Read One
router.get('/:id', getBlogCategoryById);

// Update
router.put('/:id', validate(updateBlogCategorySchema), updateBlogCategory);

// Delete
router.delete('/:id', deleteBlogCategory);

module.exports = router;
