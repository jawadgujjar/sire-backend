const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    sku: Joi.string().optional(), // Auto-generated if not provided
    slug: Joi.string()
      .regex(/^[a-z0-9/-]+$/)
      .required()
      .messages({
        'string.pattern.base':
          'Slug must be lowercase, alphanumeric, and can include hyphens and slashes (e.g., boxes/custom-box/luxury-matte)',
        'any.required': 'Slug is required',
      }),
    identifierExists: Joi.boolean().default(true),
    gtin: Joi.string().required(),
    mpn: Joi.string().required(),
    categories: Joi.array().items(Joi.string().custom(objectId)).required(),
    subcategories: Joi.array().items(Joi.string().custom(objectId)).optional(),
    googleProductCategory: Joi.string()
      .default('Office Supplies > General Office Supplies > Shipping Supplies > Boxes')
      .required(),
    productType: Joi.string().default('Packaging Boxes>Custom Printed Boxes'),
    title: Joi.string().required(),
    image: Joi.string().optional(),
    additionalImages: Joi.array().items(Joi.string()).default([]),
    description: Joi.string().required(),
    pdfImage: Joi.string().optional(),
    brand: Joi.string().default('SirePrinting').required(),
    condition: Joi.string().valid('new', 'used', 'refurbished').default('new').required(),
    availability: Joi.string().valid('in stock', 'out of stock', 'preorder').default('in stock').required(),
    price: Joi.number().required(),
    priceCurrency: Joi.string().default('GBP').required(),
    salePrice: Joi.number().optional(),
    salePriceEffectiveDate: Joi.object({
      start: Joi.date().optional(),
      end: Joi.date().optional(),
    }).optional(),
    shipping: Joi.array()
      .items(
        Joi.object({
          country: Joi.string().default('US').required(),
          region: Joi.string().optional(),
          service: Joi.string().default('Standard').required(),
          price: Joi.number().default(0).required(),
          minHandlingTime: Joi.number().default(1),
          maxHandlingTime: Joi.number().default(3),
        })
      )
      .default([]),
    variantDetail: Joi.object({
      material: Joi.array().items(Joi.string()).required(),
      colormodel: Joi.array().items(Joi.string()).required(),
      finishing: Joi.array().items(Joi.string()).required(),
      addon: Joi.array().items(Joi.string()).default([]),
      turnaround: Joi.array().items(Joi.string()).required(),
      faqs: Joi.array()
        .items(
          Joi.object({
            question: Joi.string().optional(),
            answer: Joi.string().optional(),
          })
        )
        .default([]),
    }).optional(),
    variantSpecifications: Joi.array()
      .items(
        Joi.object({
          image: Joi.string().optional(),
          title: Joi.string().required(),
          description: Joi.string().required(),
        })
      )
      .default([]),
    detailTitle: Joi.string().optional(),
    detailSubtitle: Joi.string().optional(),
    detailDescription: Joi.array()
      .items(
        Joi.object({
          description: Joi.string().optional(),
          image: Joi.string().optional(),
        })
      )
      .default([]),
    dimensions: Joi.object({
      length: Joi.number().optional(),
      width: Joi.number().optional(),
      height: Joi.number().optional(),
      unit: Joi.string().default('in'),
    }).optional(),
    variants: Joi.array()
      .items(
        Joi.object({
          sku: Joi.string().optional(), // Auto-generated if not provided
          slug: Joi.string()
            .regex(/^[a-z0-9/-]+$/)
            .required()
            .messages({
              'string.pattern.base':
                'Slug must be lowercase, alphanumeric, and can include hyphens and slashes (e.g., boxes/custom-box/luxury-matte)',
              'any.required': 'Slug is required',
            }),
          variantTitle: Joi.string().required(),
          variantDescription: Joi.string().required(),
          price: Joi.number().required(),
          salePrice: Joi.number().optional(),
          dimensions: Joi.object({
            length: Joi.number().required(),
            width: Joi.number().required(),
            height: Joi.number().required(),
            unit: Joi.string().default('in'),
          }).required(),
          variantDetail: Joi.object({
            material: Joi.array().items(Joi.string()).required(),
            colormodel: Joi.array().items(Joi.string()).required(),
            finishing: Joi.array().items(Joi.string()).required(),
            addon: Joi.array().items(Joi.string()).default([]),
            turnaround: Joi.array().items(Joi.string()).required(),
            faqs: Joi.array()
              .items(
                Joi.object({
                  question: Joi.string().optional(),
                  answer: Joi.string().optional(),
                })
              )
              .default([]),
          }).required(),
          variantSpecifications: Joi.array()
            .items(
              Joi.object({
                image: Joi.string().optional(),
                title: Joi.string().required(),
                description: Joi.string().required(),
              })
            )
            .default([]),
          detailTitle: Joi.string().optional(),
          detailSubtitle: Joi.string().optional(),
          seoTitle: Joi.string().optional(),
          seoDescription: Joi.string().optional(),
          detailDescription: Joi.array()
            .items(
              Joi.object({
                description: Joi.string().optional(),
                image: Joi.string().optional(),
              })
            )
            .default([]),
        })
      )
      .default([]),
    specifications: Joi.array()
      .items(
        Joi.object({
          image: Joi.string().optional(),
          title: Joi.string().required(),
          description: Joi.string().required(),
        })
      )
      .default([]),
    reviews: Joi.array()
      .items(
        Joi.object({
          rating: Joi.number().min(1).max(5).required(),
          comment: Joi.string().optional(),
          userId: Joi.string().custom(objectId).optional(),
          userName: Joi.string().optional(),
          createdAt: Joi.date().default(Date.now),
        })
      )
      .default([]),
    averageRating: Joi.number().default(0),
    schemaName: Joi.string().optional(),
    seoTitle: Joi.string().optional(),
    seoDescription: Joi.string().optional(),
    seoKeyword: Joi.array().items(Joi.string()).optional(), // Added missing field
    isBundle: Joi.boolean().default(false),
    multipack: Joi.number().default(1),
    customizable: Joi.boolean().default(true),
    minimumOrderQuantity: Joi.number().default(1),
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
  body: Joi.object()
    .keys({
      sku: Joi.string().optional(),
      slug: Joi.string()
        .regex(/^[a-z0-9/-]+$/)
        .optional()
        .messages({
          'string.pattern.base':
            'Slug must be lowercase, alphanumeric, and can include hyphens and slashes (e.g., boxes/custom-box/luxury-matte)',
          'any.required': 'Slug is required',
        }),
      identifierExists: Joi.boolean().optional(),
      gtin: Joi.string().optional(),
      mpn: Joi.string().optional(),
      categories: Joi.array().items(Joi.string().custom(objectId)).optional(),
      subcategories: Joi.array().items(Joi.string().custom(objectId)).optional(),
      googleProductCategory: Joi.string().optional(),
      productType: Joi.string().optional(),
      title: Joi.string().optional(),
      image: Joi.string().optional(),
      additionalImages: Joi.array().items(Joi.string()).optional(),
      description: Joi.string().optional(),
      pdfImage: Joi.string().optional(),
      brand: Joi.string().optional(),
      condition: Joi.string().valid('new', 'used', 'refurbished').optional(),
      availability: Joi.string().valid('in stock', 'out of stock', 'preorder').optional(),
      price: Joi.number().optional(),
      priceCurrency: Joi.string().optional(),
      salePrice: Joi.number().optional(),
      salePriceEffectiveDate: Joi.object({
        start: Joi.date().optional(),
        end: Joi.date().optional(),
      }).optional(),
      shipping: Joi.array()
        .items(
          Joi.object({
            country: Joi.string().optional(),
            region: Joi.string().optional(),
            service: Joi.string().optional(),
            price: Joi.number().optional(),
            minHandlingTime: Joi.number().optional(),
            maxHandlingTime: Joi.number().optional(),
          })
        )
        .optional(),
      variantDetail: Joi.object({
        material: Joi.array().items(Joi.string()).optional(),
        colormodel: Joi.array().items(Joi.string()).optional(),
        finishing: Joi.array().items(Joi.string()).optional(),
        addon: Joi.array().items(Joi.string()).optional(),
        turnaround: Joi.array().items(Joi.string()).optional(),
        faqs: Joi.array()
          .items(
            Joi.object({
              question: Joi.string().optional(),
              answer: Joi.string().optional(),
            })
          )
          .optional(),
      }).optional(),
      variantSpecifications: Joi.array()
        .items(
          Joi.object({
            image: Joi.string().optional(),
            title: Joi.string().optional(),
            description: Joi.string().optional(),
          })
        )
        .optional(),
      detailTitle: Joi.string().optional(),
      detailSubtitle: Joi.string().optional(),
      detailDescription: Joi.array()
        .items(
          Joi.object({
            description: Joi.string().optional(),
            image: Joi.string().optional(),
          })
        )
        .optional(),
      dimensions: Joi.object({
        length: Joi.number().optional(),
        width: Joi.number().optional(),
        height: Joi.number().optional(),
        unit: Joi.string().optional(),
      }).optional(),
      variants: Joi.array()
        .items(
          Joi.object({
            sku: Joi.string().optional(),
            slug: Joi.string()
              .regex(/^[a-z0-9/-]+$/)
              .required()
              .messages({
                'string.pattern.base':
                  'Slug must be lowercase, alphanumeric, and can include hyphens and slashes (e.g., boxes/custom-box/luxury-matte)',
                'any.required': 'Slug is required',
              }),
            variantTitle: Joi.string().optional(),
            variantDescription: Joi.string().optional(),
            price: Joi.number().optional(),
            salePrice: Joi.number().optional(),
            dimensions: Joi.object({
              length: Joi.number().optional(),
              width: Joi.number().optional(),
              height: Joi.number().optional(),
              unit: Joi.string().optional(),
            }).optional(),
            variantDetail: Joi.object({
              material: Joi.array().items(Joi.string()).optional(),
              colormodel: Joi.array().items(Joi.string()).optional(),
              finishing: Joi.array().items(Joi.string()).optional(),
              addon: Joi.array().items(Joi.string()).optional(),
              turnaround: Joi.array().items(Joi.string()).optional(),
              faqs: Joi.array()
                .items(
                  Joi.object({
                    question: Joi.string().optional(),
                    answer: Joi.string().optional(),
                  })
                )
                .optional(),
            }).optional(),
            variantSpecifications: Joi.array()
              .items(
                Joi.object({
                  image: Joi.string().optional(),
                  title: Joi.string().optional(),
                  description: Joi.string().optional(),
                })
              )
              .optional(),
            detailTitle: Joi.string().optional(),
            detailSubtitle: Joi.string().optional(),
            seoTitle: Joi.string().optional(),
            seoDescription: Joi.string().optional(),
            detailDescription: Joi.array()
              .items(
                Joi.object({
                  description: Joi.string().optional(),
                  image: Joi.string().optional(),
                })
              )
              .optional(),
          })
        )
        .optional(),
      specifications: Joi.array()
        .items(
          Joi.object({
            image: Joi.string().optional(),
            title: Joi.string().optional(),
            description: Joi.string().optional(),
          })
        )
        .optional(),
      reviews: Joi.array()
        .items(
          Joi.object({
            rating: Joi.number().min(1).max(5).optional(),
            comment: Joi.string().optional(),
            userId: Joi.string().custom(objectId).optional(),
            userName: Joi.string().optional(),
            createdAt: Joi.date().optional(),
          })
        )
        .optional(),
      averageRating: Joi.number().optional(),
      schemaName: Joi.string().optional(),
      seoTitle: Joi.string().optional(),
      seoDescription: Joi.string().optional(),
      seoKeyword: Joi.array().items(Joi.string()).optional(),
      isBundle: Joi.boolean().optional(),
      multipack: Joi.number().optional(),
      customizable: Joi.boolean().optional(),
      minimumOrderQuantity: Joi.number().optional(),
    })
    .min(1),
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
