const Joi = require('joi');

const createPortfolio = {
  body: Joi.object().keys({
    productId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        'string.pattern.base': 'Invalid productId format. Must be a valid MongoDB ObjectId.',
      }),
  }),
};

const updatePortfolio = {
  body: Joi.object().keys({
    productId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .optional()
      .messages({
        'string.pattern.base': 'Invalid productId format. Must be a valid MongoDB ObjectId.',
      }),
  }),
};

const getPortfolioById = {
  params: Joi.object().keys({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        'string.pattern.base': 'Invalid id format. Must be a valid MongoDB ObjectId.',
      }),
  }),
};

module.exports = {
  createPortfolio,
  updatePortfolio,
  getPortfolioById,
};
