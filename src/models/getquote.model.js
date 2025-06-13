const mongoose = require('mongoose');

// GetQuote Schema
const getQuoteSchema = new mongoose.Schema({
  length: {
    type: Number, // Length of the product
    required: true,
  },
  width: {
    type: Number, // Width of the product
    required: true,
  },
  height: {
    type: Number, // Depth of the product
    required: true,
  },
  inches: {
    type: String, // Inches dimension of the product (optional if needed)
    required: false,
  },
  chooseProduct: {
    type: String, // The product being requested for a quote
    required: true,
  },
  colors: {
    type: String, // Array of color choices
    required: true,
  },
  quantity: {
    type: Number, // Number of items requested
    required: true,
  },
  phoneNumber: {
    type: String, // Phone number of the user
    required: true,
  },
  fullName: {
    type: String, // Full name of the person requesting the quote
    required: true,
  },
  email: {
    type: String, // Email address of the person requesting the quote
    required: true,
  },
  uploadFile: {
    type: String, // URL or path to the uploaded file (can store the file URL if stored on a server)
    required: false,
  },
  material: {
    type: String, // URL or path to the uploaded file (can store the file URL if stored on a server)
    required: false,
  },
  finishOption: {
    type: String, // URL or path to the uploaded file (can store the file URL if stored on a server)
    required: false,
  },
  message: {
    type: String, // Any additional message from the user
    required: false,
  },
  companyName: {
    type: String, // Any additional message from the user
    required: false,
  },
  seoTitle: { type: String },
  seoDescription: { type: String },
});

// GetQuote Model
const GetQuote = mongoose.model('GetQuote', getQuoteSchema);

module.exports = GetQuote;
