const quoteService = require('../services/getquote.service');

// Handler to create a new quote
const createQuoteHandler = async (req, res) => {
  try {
    const quoteData = req.body;
    const newQuote = await quoteService.createQuoteService(quoteData);
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler to get all quotes
const getAllQuotesHandler = async (req, res) => {
  try {
    const quotes = await quoteService.getAllQuotesService();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler to get a quote by ID
const getQuoteByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await quoteService.getQuoteByIdService(id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler to update a quote by ID
const updateQuoteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedQuote = await quoteService.updateQuoteService(id, updateData);
    if (!updatedQuote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler to delete a quote by ID
const deleteQuoteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuote = await quoteService.deleteQuoteService(id);
    if (!deletedQuote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuoteHandler,
  getAllQuotesHandler,
  getQuoteByIdHandler,
  updateQuoteHandler,
  deleteQuoteHandler,
};
