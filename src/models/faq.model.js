const mongoose = require('mongoose');

const faqItemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const faqSchema = new mongoose.Schema({
  faqs: [faqItemSchema],
  seoTitle: { type: String },
  seoDescription: { type: String },
});

module.exports = mongoose.model('Faq', faqSchema);
