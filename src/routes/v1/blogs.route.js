const express = require('express');

const router = express.Router();
const blogController = require('../../controllers/blogs.controller');

router.post('/', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

// Extra routes
router.get('/byauthor/:authorId', blogController.getByAuthorId);
router.get('/bycategory/:categoryId', blogController.getByCategoryId);

module.exports = router;
