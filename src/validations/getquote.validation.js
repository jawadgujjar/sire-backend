const Joi = require('joi');

// Define validation schema for creating a quote
const createQuote = {
  body: Joi.object().keys({
    length: Joi.number().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
    inches: Joi.string().optional(),
    chooseProduct: Joi.string().required(),
    colors: Joi.string().required(),
    quantity: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    uploadFile: Joi.string().optional(),
    message: Joi.string().optional(),
    material: Joi.string().optional(),
    finishOption: Joi.string().optional(),
    companyName: Joi.string().optional(),
  }),
};

// Define validation schema for getting a quote by ID
const getQuoteById = {
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(), // MongoDB ObjectId
  }),
};

// Define validation schema for updating a quote
const updateQuote = {
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
  body: Joi.object().keys({
    length: Joi.number().optional(),
    width: Joi.number().optional(),
    height: Joi.number().optional(),
    inches: Joi.string().optional(),
    chooseProduct: Joi.string().optional(),
    colors: Joi.string().required(),
    quantity: Joi.number().optional(),
    phoneNumber: Joi.string().optional(),
    fullName: Joi.string().optional(),
    email: Joi.string().email().optional(),
    uploadFile: Joi.string().optional(),
    message: Joi.string().optional(),
    material: Joi.string().optional(),
    finishOption: Joi.string().optional(),
    companyName: Joi.string().optional(),
  }),
};

// Define validation schema for deleting a quote
const deleteQuote = {
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
};

module.exports = {
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
