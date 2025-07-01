const Blog = require('../models/blogs.model');

const createBlog = async (data) => {
  return Blog.create(data);
};

const getAllBlogs = async () => {
  return Blog.find().populate('blogAuthor blogCategory').sort({ createdAt: -1 });
};

const getBlogById = async (id) => {
  return Blog.findById(id).populate('blogAuthor blogCategory');
};

const getBlogBySlug = async (slug) => {
  return Blog.findOne({ slug }).populate('blogAuthor blogCategory');
};

const updateBlog = async (id, data) => {
  return Blog.findByIdAndUpdate(id, data, { new: true }).populate('blogAuthor blogCategory');
};

const deleteBlog = async (id) => {
  return Blog.findByIdAndDelete(id);
};

const getByAuthorId = async (authorId) => {
  return Blog.find({ blogAuthor: authorId }).populate('blogAuthor blogCategory').sort({ createdAt: -1 });
};

const getByCategoryId = async (categoryId) => {
  return Blog.find({ blogCategory: categoryId }).populate('blogAuthor blogCategory').sort({ createdAt: -1 });
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  getByAuthorId,
  getByCategoryId,
};
