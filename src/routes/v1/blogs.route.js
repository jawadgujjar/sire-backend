const express = require('express');
const validate = require('../../middlewares/validate');
const blogValidation = require('../../validations/blogs.validation');
const blogController = require('../../controllers/blogs.controller');

const router = express.Router();

// POST - Create a new blog
router.route('/').post(validate(blogValidation.createBlog), blogController.createBlog).get(blogController.getAllBlogs);

// GET, PATCH, DELETE - Blog by ID (MongoDB ObjectId only)
router
  .route('/:id([0-9a-fA-F]{24})')
  .get(blogController.getBlogById)
  .put(validate(blogValidation.updateBlog), blogController.updateBlog)
  .delete(blogController.deleteBlog);

// GET - Blog by slug
router.route('/:slug').get(blogController.getBlogBySlug);

// GET - Blogs by author ID
router.route('/byauthor/:authorId').get(blogController.getByAuthorId);

// GET - Blogs by category ID
router.route('/bycategory/:categoryId').get(blogController.getByCategoryId);

module.exports = router;
