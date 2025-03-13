const Joi = require('joi');

const createCustomerFeedback = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    image: Joi.string().uri().required(),
    faqs: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().trim().required(),
          description: Joi.string().required(),
        })
      )
      .optional(), // FAQ field is optional, but if provided, each FAQ must follow the structure
  }),
};

const updateCustomerFeedback = {
  body: Joi.object().keys({
    name: Joi.string().trim(),
    description: Joi.string().trim(),
    image: Joi.string().uri(),
    faqs: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().trim().required(),
          description: Joi.string().required(),
        })
      )
      .optional(), // FAQ field is optional for update
  }),
};

module.exports = {
  createCustomerFeedback,
  updateCustomerFeedback,
};
