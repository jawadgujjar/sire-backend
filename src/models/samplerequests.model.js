const mongoose = require('mongoose');

// Reuse the shipping address schema
const shippingAddressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String },
    phoneNumber: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
);

// New SampleRequest schema
const sampleRequestSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    size: {
      length: { type: Number, required: true, min: 0 },
      width: { type: Number, required: true, min: 0 },
      height: { type: Number, required: true, min: 0 },
      unit: { type: String, default: 'in', enum: ['in', 'cm', 'mm'] },
    },
    file: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    shippingAddress: shippingAddressSchema,
    notification: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SampleRequest', sampleRequestSchema);
