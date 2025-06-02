const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../services/blogauthor.service');

// ➕ Create
const createBlogAuthor = async (req, res) => {
  try {
    const author = await createAuthor(req.body);
    res.status(201).json({ success: true, message: 'Author created', data: author });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 📋 Get All
const getAllBlogAuthors = async (req, res) => {
  try {
    const authors = await getAllAuthors();
    res.status(200).json({ success: true, data: authors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔍 Get One
const getBlogAuthorById = async (req, res) => {
  try {
    const author = await getAuthorById(req.params.id);
    if (!author) return res.status(404).json({ success: false, message: 'Author not found' });
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✏️ Update
const updateBlogAuthor = async (req, res) => {
  try {
    const author = await updateAuthor(req.params.id, req.body);
    if (!author) return res.status(404).json({ success: false, message: 'Author not found' });
    res.status(200).json({ success: true, message: 'Author updated', data: author });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ❌ Delete
const deleteBlogAuthor = async (req, res) => {
  try {
    const author = await deleteAuthor(req.params.id);
    if (!author) return res.status(404).json({ success: false, message: 'Author not found' });
    res.status(200).json({ success: true, message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBlogAuthor,
  getAllBlogAuthors,
  getBlogAuthorById,
  updateBlogAuthor,
  deleteBlogAuthor,
};
