const mongoose = require('mongoose');

// Newsletter Schema
const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String, // Single email field
      required: true,
      unique: true, // Ensure the email is unique
      lowercase: true, // Convert email to lowercase before saving
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Basic email validation
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Newsletter Model
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
