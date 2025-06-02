const blogService = require('../services/blogs.service');

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create blog', error: err });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blogs', error: err });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Error getting blog', error: err });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Error updating blog', error: err });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting blog', error: err });
  }
};

exports.getByAuthorId = async (req, res) => {
  try {
    const blogs = await blogService.getByAuthorId(req.params.authorId);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching by author', error: err });
  }
};

exports.getByCategoryId = async (req, res) => {
  try {
    const blogs = await blogService.getByCategoryId(req.params.categoryId);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching by category', error: err });
  }
};
