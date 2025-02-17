// controllers/blog.controller.js
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const blogService = require('../services/blogs.service');

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getAllBlogs = catchAsync(async (req, res) => {
  const blogs = await blogService.getAllBlogs();
  res.status(httpStatus.OK).send(blogs);
});

const getBlogById = catchAsync(async (req, res) => {
  const blog = await blogService.getBlogById(req.params.id);
  res.status(httpStatus.OK).send(blog);
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlog(req.params.id, req.body);
  res.status(httpStatus.OK).send(blog);
});

const deleteBlog = catchAsync(async (req, res) => {
  await blogService.deleteBlog(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
