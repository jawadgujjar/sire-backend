// routes/blog.route.js
const express = require('express');
const validate = require('../../middlewares/validate');
const blogValidation = require('../../validations/blogs.validation');
const blogController = require('../../controllers/blogs.controller');

const router = express.Router();

// POST - Create a new blog
router.route('/').post(validate(blogValidation.createBlog), blogController.createBlog).get(blogController.getAllBlogs); // Get all blogs

// GET - Get blog by ID
router
  .route('/:id')
  .get(blogController.getBlogById) // Get blog by ID
  .patch(validate(blogValidation.updateBlog), blogController.updateBlog) // Update blog
  .delete(blogController.deleteBlog); // Delete blog by ID

module.exports = router;
