const BlogCategory = require('../models/blogcategory.model');

// ➕ Create
const createCategory = async (data) => {
  const category = new BlogCategory(data);
  return category.save(); // ✅ await hata diya
};

// 📋 Get All
const getAllCategories = async () => {
  return BlogCategory.find().sort({ createdAt: -1 }); // ✅
};

// 🔍 Get One
const getCategoryById = async (id) => {
  return BlogCategory.findById(id); // ✅
};

// ✏️ Update
const updateCategory = async (id, data) => {
  return BlogCategory.findByIdAndUpdate(id, data, { new: true }); // ✅
};

// ❌ Delete
const deleteCategory = async (id) => {
  return BlogCategory.findByIdAndDelete(id); // ✅
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
