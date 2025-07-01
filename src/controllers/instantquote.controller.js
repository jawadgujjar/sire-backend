const InstantQuote = require('../models/instantquote.model');

// Create
const createQuote = async (req, res) => {
  try {
    const quote = new InstantQuote(req.body);
    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All
const getAllQuotes = async (req, res) => {
  try {
    const quotes = await InstantQuote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read One
const getQuoteById = async (req, res) => {
  try {
    const quote = await InstantQuote.findById(req.params.id);
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateQuote = async (req, res) => {
  try {
    const quote = await InstantQuote.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteQuote = async (req, res) => {
  try {
    const quote = await InstantQuote.findByIdAndDelete(req.params.id);
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    res.json({ message: 'Quote deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
