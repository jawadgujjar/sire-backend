const { SubCategory, Category } = require('../models');
const Product = require('../models/products.model');

const createProduct = async (data) => {
  return Product.create(data);
};

const getProductById = async (id) => {
  const product = await Product.findById(id).populate('categories subcategories').lean(); // Convert to plain JS object

  if (!product) {
    throw new Error('Product not found');
  }

  // Ensure variants array exists (even if empty)
  product.variants = product.variants || [];

  return product;
};

const getProductsByCategoryId = async (categoryId) => {
  return Product.find({ categories: categoryId });
};

const getProductsBySubCategoryId = async (subCategoryId) => {
  return Product.find({ subcategories: subCategoryId });
};
const getProductBySlugService = async (categorySlug, subCategorySlug, productSlug) => {
  try {
    // Validate category
    const category = await Category.findOne({ slug: categorySlug });
    if (!category) throw new Error('Category not found');

    // Construct full subcategory slug
    const fullSubCategorySlug = `${categorySlug}/${subCategorySlug}`;
    const subCategory = await SubCategory.findOne({
      slug: fullSubCategorySlug, // Use full slug
      categoryId: category._id,
    });
    if (!subCategory) throw new Error('Subcategory not found');

    // Construct full product slug
    const fullSlug = `${categorySlug}/${subCategorySlug}/${productSlug}`;
    const product = await Product.findOne({ slug: fullSlug }).populate('categories subcategories');
    if (!product) throw new Error('Product not found');

    product.variants = product.variants || [];
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductByVariantSkuService = async (categorySlug, subCategorySlug, productSlug, variantSku) => {
  try {
    // Validate category
    const category = await Category.findOne({ slug: categorySlug });
    if (!category) throw new Error('Category not found');

    // Construct full subcategory slug
    const fullSubCategorySlug = `${categorySlug}/${subCategorySlug}`;
    const subCategory = await SubCategory.findOne({
      slug: fullSubCategorySlug,
      categoryId: category._id,
    });
    if (!subCategory) throw new Error('Subcategory not found');

    // Construct full product slug
    const fullSlug = `${categorySlug}/${subCategorySlug}/${productSlug}`;
    const product = await Product.findOne({ slug: fullSlug, 'variants.sku': variantSku }).populate(
      'categories subcategories'
    );
    if (!product) throw new Error('Product or variant not found');

    product.variants = product.variants || [];
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProductById = async (productId, updateBody) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error('Product not found');
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteProductById = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductById,
  getProductsByCategoryId,
  getProductsBySubCategoryId,
  getProductBySlugService,
  getProductByVariantSkuService,
  updateProductById,
  deleteProductById,
};
