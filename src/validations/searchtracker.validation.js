const Joi = require('joi');

const createSearch = {
  body: Joi.object().keys({
    link: Joi.string().uri().required(),
    userIP: Joi.string().ip().optional(),
  }),
};

module.exports = {
  createSearch,
};
