const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    gtin: Joi.string().required(),
    mpn: Joi.string().required(),
    categories: Joi.array().items(Joi.string().custom(objectId)).required(),
    subcategories: Joi.array().items(Joi.string().custom(objectId)),
    googleProductCategory: Joi.string(),
    productType: Joi.string(),
    pdfImage: Joi.string(),
    title: Joi.string().required(),
    image: Joi.string().required(),
    additionalImages: Joi.array().items(Joi.string()),
    description: Joi.string().required().min(150),
    brand: Joi.string(),
    condition: Joi.string().valid('new', 'used', 'refurbished'),
    availability: Joi.string().valid('in stock', 'out of stock', 'preorder'),
    price: Joi.number().required(),
    priceCurrency: Joi.string(),
    salePrice: Joi.number(),
    salePriceEffectiveDate: Joi.object({
      start: Joi.date(),
      end: Joi.date(),
    }),
    shipping: Joi.array().items(
      Joi.object({
        country: Joi.string().required(),
        region: Joi.string(),
        service: Joi.string().required(),
        price: Joi.number().required(),
        minHandlingTime: Joi.number(),
        maxHandlingTime: Joi.number(),
      })
    ),
    shippingWeight: Joi.object({
      value: Joi.number(),
      unit: Joi.string(),
    }),
    variants: Joi.array().items(Joi.any()), // skip deep variant validation for brevity
    specifications: Joi.array().items(Joi.any()),
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
    seoKeyword: Joi.array().items(Joi.string()),
    customizable: Joi.boolean(),
    multipack: Joi.number(),
    isBundle: Joi.boolean(),
    adult: Joi.boolean(),
    minimumOrderQuantity: Joi.number(),
  }),
};

const getProductById = {
  params: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
  }),
};

const getByCategoryId = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().custom(objectId),
  }),
};

const getBySubCategoryId = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().required().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProductById,
  getByCategoryId,
  getBySubCategoryId,
  updateProduct,
  deleteProduct,
};
