const mongoose = require('mongoose');

// FAQ Schema
const faqSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
});

// Customer Feedback Schema
const customerFeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Customer name
      required: true,
      trim: true,
    },
    description: {
      type: String, // Feedback description
      required: true,
      trim: true,
    },
    image: {
      type: String, // Image URL or file path
      required: true,
    },
    faqs: [faqSchema], // Array of FAQs
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Customer Feedback Model
const CustomerFeedback = mongoose.model('CustomerFeedback', customerFeedbackSchema);

module.exports = CustomerFeedback;
