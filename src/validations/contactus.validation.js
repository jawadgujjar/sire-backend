const Joi = require('joi');

const createContact = {
  body: Joi.object().keys({
    fullName: Joi.string().required().trim(),
    email: Joi.string().required().email(),
    phoneNumber: Joi.string()
      .required()
      .pattern(/^[0-9]{10,15}$/)
      .message('Phone number must be between 10 to 15 digits'),
    message: Joi.string().required().trim(),
  }),
};

module.exports = {
  createContact,
};
