const express = require('express');

const router = express.Router();
const {
  createBlogAuthor,
  getAllBlogAuthors,
  getBlogAuthorById,
  updateBlogAuthor,
  deleteBlogAuthor,
} = require('../../controllers/blogauthor.controller');

const { createBlogAuthorSchema, updateBlogAuthorSchema } = require('../../validations/blogauthor.validation');

const validate = require('../../middlewares/validate');

// Create
router.post('/', validate(createBlogAuthorSchema), createBlogAuthor);

// Read All
router.get('/', getAllBlogAuthors);

// Read One
router.get('/:id', getBlogAuthorById);

// Update
router.put('/:id', validate(updateBlogAuthorSchema), updateBlogAuthor);

// Delete
router.delete('/:id', deleteBlogAuthor);

module.exports = router;
