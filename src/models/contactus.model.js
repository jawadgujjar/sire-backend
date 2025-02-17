const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true, // Full name is required
      trim: true,
    },
    email: {
      type: String,
      required: true, // Email is required
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
    },
    phoneNumber: {
      type: String,
      required: true, // Phone number is required
      trim: true,
      match: [/^[0-9]{10,15}$/, 'Please enter a valid phone number'],
    },
    message: {
      type: String,
      required: true, // Message is required
      trim: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Contact Model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
