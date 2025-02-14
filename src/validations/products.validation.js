// validations/products.validation.js
const Joi = require('joi');

const createProduct = Joi.object({
  category: Joi.string().required(),
  sku: Joi.string().optional(), // SKU will be auto-generated if not provided
  titlerelatedProducts: Joi.array()
    .items(
      Joi.object({
        image: Joi.string().uri().required(),
        title: Joi.string().required(),
        details: Joi.object({
          images: Joi.array().items(Joi.string().uri()).required(),
          specifications: Joi.object({
            boxStyle: Joi.string().optional(),
            dimensions: Joi.string().optional(),
            quantity: Joi.number().optional(),
            includedOptions: Joi.string().optional(),
            additionalOptions: Joi.string().optional(),
            proof: Joi.string().optional(),
            shipping: Joi.string().optional(),
            preferredDesignFile: Joi.string().optional(),
            assembling: Joi.string().optional(),
          }).optional(),
          stockType: Joi.array()
            .items(
              Joi.object({
                image: Joi.string().uri().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
              })
            )
            .optional(),
          finishingAssortment: Joi.array()
            .items(
              Joi.object({
                image: Joi.string().uri().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
              })
            )
            .optional(),
          productDescription: Joi.array()
            .items(
              Joi.object({
                title: Joi.string().required(),
                description: Joi.string().required(),
              })
            )
            .optional(),
        }).required(),
      })
    )
    .required(),
  description: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
      })
    )
    .optional(),
  seoTitle: Joi.string().optional(),
  seoKeyword: Joi.string().optional(),
  seoDescription: Joi.string().optional(),
});

const getProductById = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const updateProduct = Joi.object({
  id: Joi.string().hex().length(24).required(),
  // Add validation rules for updating product
});

const deleteProduct = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
