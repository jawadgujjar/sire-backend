const mongoose = require('mongoose');

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

const profileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    shippingAddress: shippingAddressSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', profileSchema);
