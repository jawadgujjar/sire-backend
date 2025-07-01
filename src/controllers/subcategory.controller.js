const subCategoryService = require('../services/subcategory.service'); // Import subcategory services
const catchAsync = require('../utils/catchAsync');

// Create new subcategory
const createSubCategory = async (req, res) => {
  try {
    const subCategory = await subCategoryService.createSubCategoryService(req.body);

    return res.status(201).json({
      message: 'Subcategory created successfully',
      subCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating subcategory',
      error: error.message,
    });
  }
};

// Get all subcategories
const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategoryService.getAllSubCategoriesService();
    return res.status(200).json(subCategories);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching subcategories',
      error: error.message,
    });
  }
};

// Get subcategory by ID
const getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await subCategoryService.getSubCategoryByIdService(id);

    if (!subCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    return res.status(200).json(subCategory);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching subcategory',
      error: error.message,
    });
  }
};

// ✅ Get subcategories by category ID
const getSubCategoriesByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await subCategoryService.getSubCategoriesByCategoryIdService(categoryId);

    return res.status(200).json(subCategories);
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching subcategories by category',
      error: error.message,
    });
  }
};
const getSubCategoryBySlug = catchAsync(async (req, res) => {
  const { categorySlug, subCategorySlug } = req.params;
  const slug = `${categorySlug}/${subCategorySlug}`;

  const subCategory = await subCategoryService.getSubCategoryBySlugService(slug);

  if (!subCategory) {
    return res.status(404).json({ message: 'Subcategory not found' });
  }

  res.status(200).send(subCategory);
});
// Update subcategory
const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedSubCategory = await subCategoryService.updateSubCategoryService(id, updateData);

    if (!updatedSubCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    return res.status(200).json({
      message: 'Subcategory updated successfully',
      subCategory: updatedSubCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating subcategory',
      error: error.message,
    });
  }
};

// Delete subcategory
const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSubCategory = await subCategoryService.deleteSubCategoryService(id);

    if (!deletedSubCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    return res.status(200).json({
      message: 'Subcategory deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting subcategory',
      error: error.message,
    });
  }
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  getSubCategoriesByCategoryId, // ✅ Exporting category-based fetch
  getSubCategoryBySlug,
  updateSubCategory,
  deleteSubCategory,
};
