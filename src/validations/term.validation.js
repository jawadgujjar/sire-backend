const Joi = require('joi');

const createTerm = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().required()).required(),
    description: Joi.array().items(Joi.string().required()).required(),
  }),
};

const updateTerm = {
  body: Joi.object().keys({
    title: Joi.array().items(Joi.string().required()).optional(),
    description: Joi.array().items(Joi.string().required()).optional(),
  }),
};

module.exports = {
  createTerm,
  updateTerm,
};
