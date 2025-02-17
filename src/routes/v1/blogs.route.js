const express = require('express');
const validate = require('../../middlewares/validate');
const blogValidation = require('../../validations/blogs.validation');
const blogController = require('../../controllers/blogs.controller');

const router = express.Router();

// POST - Create a new blog
router
  .route('/')
  .post(validate(blogValidation.createBlog), blogController.createBlogHandler)
  .get(blogController.getAllBlogsHandler); // Get all blogs

// GET - Get blog by ID
router
  .route('/:id')
  .get(validate(blogValidation.getBlogById), blogController.getBlogByIdHandler)
  .patch(validate(blogValidation.updateBlog), blogController.updateBlogHandler)
  .delete(validate(blogValidation.deleteBlog), blogController.deleteBlogHandler);

// GET - Get blogs by category
router.route('/category/:category').get(blogController.getBlogsByCategoryHandler); // Get blogs by category

module.exports = router;
