const SubCategory = require('../models/subcategory.model');

// Create subcategory
const createSubCategoryService = async (subCategoryData) => {
  try {
    const subCategory = await SubCategory.create(subCategoryData);
    return subCategory;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all subcategories
const getAllSubCategoriesService = async () => {
  try {
    return await SubCategory.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get subcategory by ID
const getSubCategoryByIdService = async (subCategoryId) => {
  try {
    return await SubCategory.findById(subCategoryId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ Get subcategories by categoryId
const getSubCategoriesByCategoryIdService = async (categoryId) => {
  try {
    return await SubCategory.find({ categoryId });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update subcategory
const updateSubCategoryService = async (subCategoryId, updateData) => {
  try {
    return await SubCategory.findByIdAndUpdate(subCategoryId, updateData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete subcategory
const deleteSubCategoryService = async (subCategoryId) => {
  try {
    return await SubCategory.findByIdAndDelete(subCategoryId);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createSubCategoryService,
  getAllSubCategoriesService,
  getSubCategoryByIdService,
  getSubCategoriesByCategoryIdService, // ✅ exported here
  updateSubCategoryService,
  deleteSubCategoryService,
};
