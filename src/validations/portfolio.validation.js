const Joi = require('joi');

const createPortfolio = {
  body: Joi.object().keys({
    category: Joi.string().required(),
    image: Joi.string().uri().required(),
    productName: Joi.string().required(),
    seoTitle: Joi.string().optional(),
    seoKeyword: Joi.string().optional(), // Make this field allowed
    seoDescription: Joi.string().optional(),
  }),
};

const updatePortfolio = {
  body: Joi.object().keys({
    category: Joi.string().optional(),
    image: Joi.string().uri().optional(),
    productName: Joi.string().optional(),
    seoTitle: Joi.string().optional(),
    seoKeyword: Joi.string().optional(), // Make this field allowed
    seoDescription: Joi.string().optional(),
  }),
};

const getPortfolioById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createPortfolio,
  updatePortfolio,
  getPortfolioById,
};
