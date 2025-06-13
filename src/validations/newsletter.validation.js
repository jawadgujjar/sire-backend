const Joi = require('joi');

const createNewsletter = {
  body: Joi.object().keys({
    email: Joi.string().email().required().messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
  }),
};

const deleteNewsletter = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createNewsletter,
  deleteNewsletter,
};
