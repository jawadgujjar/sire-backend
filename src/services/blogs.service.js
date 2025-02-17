// services/blog.service.js
const httpStatus = require('http-status');
const { Blog } = require('../models');
const ApiError = require('../utils/ApiError');

const createBlog = async (blogData) => {
  const blog = await Blog.create(blogData);
  return blog;
};

const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

const getBlogById = async (id) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
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
  updateBlog,
  deleteBlog,
};
