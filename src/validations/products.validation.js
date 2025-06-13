const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    sku: Joi.string().optional(),
    gtin: Joi.string().required(),
    mpn: Joi.string().required(),
    categories: Joi.array().items(Joi.string().custom(objectId)).required(),
    subcategories: Joi.array().items(Joi.string().custom(objectId)),
    googleProductCategory: Joi.string(),
    productType: Joi.string(),
    pdfImage: Joi.string(),
    title: Joi.string().required(),
    image: Joi.string(),
    additionalImages: Joi.array().items(Joi.string()),
    description: Joi.string().required(),
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

    variants: Joi.array().items(
      Joi.object({
        sku: Joi.string().optional(),
        variantTitle: Joi.string().required(),
        variantDescription: Joi.string().required(),
        price: Joi.number().required(),
        salePrice: Joi.number(),
        dimensions: Joi.object({
          length: Joi.number().required(),
          width: Joi.number().required(),
          height: Joi.number().required(),
          unit: Joi.string(),
        }),

        variantDetail: Joi.object({
          material: Joi.array().items(Joi.string()).required(),
          colormodel: Joi.array().items(Joi.string()).required(),
          finishing: Joi.array().items(Joi.string()).required(),
          addon: Joi.array().items(Joi.string()),
          turnaround: Joi.array().items(Joi.string()).required(),
          faqs: Joi.array().items(
            Joi.object({
              question: Joi.string(),
              answer: Joi.string(),
            })
          ),
        }).required(),
        variantSpecifications: Joi.array().items(
          Joi.object({
            image: Joi.string(),
            title: Joi.string().required(),
            description: Joi.string().required(),
          })
        ),
        detailTitle: Joi.string(),
        detailSubtitle: Joi.string(),
        detailDescription: Joi.array().items(
          Joi.object({
            description: Joi.string(),
            image: Joi.string(),
          })
        ),
      })
    ),
    specifications: Joi.array().items(
      Joi.object({
        image: Joi.string(),
        title: Joi.string().required(),
        description: Joi.string().required(),
      })
    ),
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
    seoKeyword: Joi.array().items(Joi.string()),
    customizable: Joi.boolean(),
    multipack: Joi.number(),
    isBundle: Joi.boolean(),
    minimumOrderQuantity: Joi.number(),
    identifierExists: Joi.boolean(),
    averageRating: Joi.number(),
    reviews: Joi.array().items(
      Joi.object({
        rating: Joi.number().required(),
      })
    ),
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
