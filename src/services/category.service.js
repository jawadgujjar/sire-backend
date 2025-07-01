const Category = require('../models/category.model'); // Import Category model

// Service to create a new category
const createCategoryService = async (data) => {
  return Category.create(data);
};

// Service to get all categories
const getAllCategoriesService = async () => {
  try {
    return await Category.find(); // Return all categories including SEO fields
  } catch (error) {
    throw new Error(error.message); // If an error occurs, throw it
  }
};

// Service to get category by ID
const getCategoryByIdService = async (categoryId) => {
  try {
    return await Category.findById(categoryId); // Find category by its ID, includes SEO fields
  } catch (error) {
    throw new Error(error.message); // If an error occurs, throw it
  }
};

// Service to get category by name
const getCategoryByNameService = async (categoryName) => {
  try {
    return await Category.findOne({ title: categoryName }); // Find category by title, includes SEO fields
  } catch (error) {
    throw new Error(error.message); // If an error occurs, throw it
  }
};
const getCategoryBySlugService = async (slug) => {
  try {
    return await Category.findOne({ slug }); // Find category by slug
  } catch (error) {
    throw new Error(error.message);
  }
};
// Service to update category by ID
const updateCategoryService = async (categoryId, updateData) => {
  try {
    // Update the category, and include SEO fields in the updateData
    return await Category.findByIdAndUpdate(categoryId, updateData, { new: true }); // Update and return the updated category
  } catch (error) {
    throw new Error(error.message); // If an error occurs, throw it
  }
};

// Service to delete category by ID
const deleteCategoryService = async (categoryId) => {
  try {
    return await Category.findByIdAndDelete(categoryId); // Delete the category by its ID
  } catch (error) {
    throw new Error(error.message); // If an error occurs, throw it
  }
};

module.exports = {
  createCategoryService,
  getAllCategoriesService,
  getCategoryByIdService,
  getCategoryByNameService,
  getCategoryBySlugService,
  updateCategoryService,
  deleteCategoryService,
};
