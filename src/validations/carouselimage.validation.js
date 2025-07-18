const Joi = require('joi');

const createCarouselImage = {
  body: Joi.object().keys({
    images: Joi.array().items(Joi.string().uri()).required(), // Must be an array of valid URLs
    seoTitle: Joi.string(),
    seoDescription: Joi.string(),
  }),
};

const updateCarouselImage = {
  body: Joi.object().keys({
    images: Joi.array().items(Joi.string().uri()), // Optional update
  }),
};

module.exports = {
  createCarouselImage,
  updateCarouselImage,
};
