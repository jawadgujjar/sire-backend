const Blog = require('../models/blogs.model');

const createBlog = async (data) => {
  return Blog.create(data); // ✅ no unnecessary await
};

const getAllBlogs = async () => {
  return Blog.find().populate('blogAuthor').populate('blogCategory').sort({ createdAt: -1 });
};

const getBlogById = async (id) => {
  return Blog.findById(id).populate('blogAuthor').populate('blogCategory');
};

const updateBlog = async (id, data) => {
  return Blog.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlog = async (id) => {
  return Blog.findByIdAndDelete(id);
};

const getByAuthorId = async (authorId) => {
  return Blog.find({ blogAuthor: authorId }).populate('blogAuthor').populate('blogCategory').sort({ createdAt: -1 });
};

const getByCategoryId = async (categoryId) => {
  return Blog.find({ blogCategory: categoryId }).populate('blogAuthor').populate('blogCategory').sort({ createdAt: -1 });
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getByAuthorId,
  getByCategoryId,
};
