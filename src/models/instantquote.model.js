const mongoose = require('mongoose');

const instantQuoteSchema = new mongoose.Schema(
  {
    length: Number,
    width: Number,
    depth: Number,
    unit: String,
    color: String,
    quantity: Number,
    image: String,
    name: String,
    email: String,
    phonenumber: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('InstantQuote', instantQuoteSchema);
