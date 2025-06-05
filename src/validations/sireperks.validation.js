const Joi = require('joi');

const perkValidationSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().uri().required(),
});

const validatePerk = (perkData) => {
  const { error } = perkValidationSchema.validate(perkData);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = { validatePerk };
