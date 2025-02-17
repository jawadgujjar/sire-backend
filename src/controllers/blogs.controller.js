// controllers/blog.controller.js
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const blogService = require('../services/blogs.service');

const createBlogHandler = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getAllBlogsHandler = catchAsync(async (req, res) => {
  const blogs = await blogService.getAllBlogs();
  res.status(httpStatus.OK).send(blogs);
});

const getBlogByIdHandler = catchAsync(async (req, res) => {
  const blog = await blogService.getBlogById(req.params.id);
  res.status(httpStatus.OK).send(blog);
});

const getBlogsByCategoryHandler = catchAsync(async (req, res) => {
  const blogs = await blogService.getBlogsByCategory(req.params.category);
  res.status(httpStatus.OK).send(blogs);
});

const updateBlogHandler = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlog(req.params.id, req.body);
  res.status(httpStatus.OK).send(blog);
});

const deleteBlogHandler = catchAsync(async (req, res) => {
  await blogService.deleteBlog(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBlogHandler,
  getAllBlogsHandler,
  getBlogByIdHandler,
  getBlogsByCategoryHandler,
  updateBlogHandler,
  deleteBlogHandler,
};
