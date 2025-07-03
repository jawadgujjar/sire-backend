const mongoose = require('mongoose');

const shippingAddressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String, required: false },
    phoneNumber: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
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
      required: false,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['Under Production', 'Forwarded to Production', 'Shipped', 'Delivered'],
      default: 'Under Production',
      required: true,
    },
    shippedvia: {
      type: String,
    },
    trackingid: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    invoice: {
      type: String,
    },

    approvedStatus: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
      required: true,
    },
    shippingAddress: [shippingAddressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
