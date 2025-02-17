// services/blog.service.js
const httpStatus = require('http-status');
const { Blog } = require('../models');
const ApiError = require('../utils/ApiError');

const createBlog = (blogData) => {
  return Blog.create(blogData); // No need for await here
};

const getAllBlogs = () => {
  return Blog.find(); // No need for await here
};

const getBlogById = async (id) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
};

const getBlogsByCategory = async (categoryId) => {
  const blogs = await Blog.find({ category: categoryId }).populate('category');
  if (!blogs.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No blogs found for this category');
  }
  return blogs;
};

const updateBlog = async (id, updateData) => {
  const blog = await Blog.findByIdAndUpdate(id, updateData, { new: true });
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
};

const deleteBlog = async (id) => {
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByCategory,
  updateBlog,
  deleteBlog,
};
