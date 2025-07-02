const { SubCategory, Category } = require('../models');
const Product = require('../models/products.model');

const createProduct = async (data) => {
  return Product.create(data);
};

const getProductById = async (id) => {
  const product = await Product.findById(id).populate('categories subcategories').lean();
  if (!product) {
    throw new Error('Product not found');
  }
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
    const category = await Category.findOne({ slug: { $regex: `^${categorySlug}$`, $options: 'i' } });
    if (!category) throw new Error('Category not found');

    // Construct full subcategory slug
    const fullSubCategorySlug = `${categorySlug}/${subCategorySlug}`;
    const subCategory = await SubCategory.findOne({
      slug: { $regex: `^${fullSubCategorySlug}$`, $options: 'i' },
      categoryId: category._id,
    });
    if (!subCategory) throw new Error('Subcategory not found');

    // Construct full product slug
    const fullSlug = `${categorySlug}/${subCategorySlug}/${productSlug}`;
    const product = await Product.findOne({ slug: { $regex: `^${fullSlug}$`, $options: 'i' } }).populate(
      'categories subcategories'
    );
    if (!product) throw new Error('Product not found');

    product.variants = product.variants || [];
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductByVariantSlugService = async (categorySlug, subCategorySlug, productSlug, variantSlug) => {
  try {
    // Validate category
    const category = await Category.findOne({ slug: { $regex: `^${categorySlug}$`, $options: 'i' } });
    if (!category) throw new Error('Category not found');

    // Construct full subcategory slug
    const fullSubCategorySlug = `${categorySlug}/${subCategorySlug}`;
    const subCategory = await SubCategory.findOne({
      slug: { $regex: `^${fullSubCategorySlug}$`, $options: 'i' },
      categoryId: category._id,
    });
    if (!subCategory) throw new Error('Subcategory not found');

    // Construct full product slug
    const fullSlug = `${categorySlug}/${subCategorySlug}/${productSlug}`;

    // Construct full variant slug
    const fullVariantSlug = `${fullSlug}-${variantSlug}`;

    // Case-insensitive slug and variant slug search
    const product = await Product.findOne({
      slug: { $regex: `^${fullSlug}$`, $options: 'i' },
      'variants.slug': { $regex: `^${fullVariantSlug}$`, $options: 'i' },
    }).populate('categories subcategories');
    if (!product) {
      throw new Error('Product or variant not found');
    }

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
  getProductByVariantSlugService,
  updateProductById,
  deleteProductById,
};
