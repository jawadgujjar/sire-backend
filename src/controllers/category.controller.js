const categoryService = require('../services/category.service'); // Import category services

// Controller to create a new category
const createCategory = async (req, res) => {
  try {
    const { title, image, seoTitle, seoKeyword, seoDescription } = req.body;

    const categoryData = {
      title,
      image,
      seoTitle,       // Adding SEO fields
      seoKeyword,     // Adding SEO fields
      seoDescription  // Adding SEO fields
    };

    const category = await categoryService.createCategoryService(categoryData);
    return res.status(201).json({
      message: 'Category created successfully',
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating category',
      error: error.message,
    });
  }
};

// Controller to get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategoriesService();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching categories',
      error: error.message,
    });
  }
};

// Controller to get category by ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryByIdService(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching category',
      error: error.message,
    });
  }
};

// Controller to get category by name
const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params; // Extract the name from the URL parameter
    const category = await categoryService.getCategoryByNameService(name);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching category by name',
      error: error.message,
    });
  }
};

// Controller to update category by ID
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Ensure we include the SEO fields as part of the update
    const updatedCategory = await categoryService.updateCategoryService(id, updateData);

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({
      message: 'Category updated successfully',
      category: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating category',
      error: error.message,
    });
  }
};

// Controller to delete category by ID
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await categoryService.deleteCategoryService(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({
      message: 'Category deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting category',
      error: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  updateCategory,
  deleteCategory,
};
