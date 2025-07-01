const BlogAuthor = require('../models/blogauthor.model');

const createAuthor = async (data) => {
  const author = new BlogAuthor(data);
  return author.save(); // ✅ await hata diya
};

const getAllAuthors = async () => {
  return BlogAuthor.find().sort({ createdAt: -1 }); // ✅ await hata diya
};

const getAuthorById = async (id) => {
  return BlogAuthor.findById(id); // ✅ await hata diya
};

const updateAuthor = async (id, data) => {
  return BlogAuthor.findByIdAndUpdate(id, data, { new: true }); // ✅ await hata diya
};

const deleteAuthor = async (id) => {
  return BlogAuthor.findByIdAndDelete(id); // ✅ await hata diya
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
