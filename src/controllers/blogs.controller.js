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
  if (!blog) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Blog not found' });
  }
  res.status(httpStatus.OK).send(blog);
});

const getBlogBySlug = catchAsync(async (req, res) => {
  const blog = await blogService.getBlogBySlug(req.params.slug);
  if (!blog) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Blog not found' });
  }
  res.status(httpStatus.OK).send(blog);
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlog(req.params.id, req.body);
  if (!blog) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Blog not found' });
  }
  res.status(httpStatus.OK).send(blog);
});

const deleteBlog = catchAsync(async (req, res) => {
  const deletedBlog = await blogService.deleteBlog(req.params.id);
  if (!deletedBlog) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Blog not found' });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

const getByAuthorId = catchAsync(async (req, res) => {
  const blogs = await blogService.getByAuthorId(req.params.authorId);
  res.status(httpStatus.OK).send(blogs);
});

const getByCategoryId = catchAsync(async (req, res) => {
  const blogs = await blogService.getByCategoryId(req.params.categoryId);
  res.status(httpStatus.OK).send(blogs);
});

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
