const Joi = require('joi');
const mongoose = require('mongoose');

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('"{{#label}}" must be a valid ObjectId');
  }
  return value;
};

const shippingAddressSchema = Joi.object({
  name: Joi.string().required(),
  companyName: Joi.string().optional(),
  phoneNumber: Joi.string().required(),
  streetAddress: Joi.string().required(),
  city: Joi.string().required(),
  province: Joi.string().required(),
  zipCode: Joi.string().required(),
  country: Joi.string().required(),
});

const createOrder = Joi.object({
  product: Joi.string().required().custom(objectId, 'ObjectId Validation'),
  material: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
  size: Joi.object({
    length: Joi.number().min(0).required(),
    width: Joi.number().min(0).required(),
    height: Joi.number().min(0).required(),
    unit: Joi.string().valid('in', 'cm', 'mm').default('in'),
  }).required(),
  file: Joi.string().optional().uri(),
  price: Joi.number().min(0).required(),
  status: Joi.string().valid('Pending', 'Approved', 'Shipped', 'Delivered', 'Cancelled').default('Pending'),
  userId: Joi.string().required().custom(objectId, 'ObjectId Validation'),
  approvedStatus: Joi.string().valid('Pending', 'Approved', 'Rejected').default('Pending'),
  shippingAddress: Joi.array().items(shippingAddressSchema).required().min(1),
});

const updateOrder = Joi.object({
  product: Joi.string().optional().custom(objectId, 'ObjectId Validation'),
  material: Joi.string().optional(),
  quantity: Joi.number().min(1).optional(),
  size: Joi.object({
    length: Joi.number().min(0).optional(),
    width: Joi.number().min(0).optional(),
    height: Joi.number().min(0).optional(),
    unit: Joi.string().valid('in', 'cm', 'mm').optional(),
  }).optional(),
  file: Joi.string().optional().uri(),
  price: Joi.number().min(0).optional(),
  status: Joi.string().valid('Pending', 'Approved', 'Shipped', 'Delivered', 'Cancelled').optional(),
  userId: Joi.string().optional().custom(objectId, 'ObjectId Validation'),
  approvedStatus: Joi.string().valid('Pending', 'Approved', 'Rejected').optional(),
  shippingAddress: Joi.array().items(shippingAddressSchema).optional(),
});

module.exports = {
  createOrder,
  updateOrder,
};
