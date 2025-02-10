const GetQuote = require('../models/getquote.model');

// Service to create a new quote
const createQuoteService = async (quoteData) => {
  try {
    const quote = await GetQuote.create(quoteData);
    return quote;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to get all quotes
const getAllQuotesService = async () => {
  try {
    return await GetQuote.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to get a quote by ID
const getQuoteByIdService = async (quoteId) => {
  try {
    return await GetQuote.findById(quoteId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to update a quote by ID
const updateQuoteService = async (quoteId, updateData) => {
  try {
    return await GetQuote.findByIdAndUpdate(quoteId, updateData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to delete a quote by ID
const deleteQuoteService = async (quoteId) => {
  try {
    return await GetQuote.findByIdAndDelete(quoteId);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createQuoteService,
  getAllQuotesService,
  getQuoteByIdService,
  updateQuoteService,
  deleteQuoteService
};
