const express = require('express');
const validate = require('../../middlewares/validate');
const quoteValidation = require('../../validations/getquote.validation');
const quoteController = require('../../controllers/getquote.controller');

const router = express.Router();

// POST - Create a new quote
router
  .route('/')
  .post(validate(quoteValidation.createQuote), quoteController.createQuoteHandler)
  .get(quoteController.getAllQuotesHandler);

// GET - Get quote by ID
router
  .route('/:id')
  .get(validate(quoteValidation.getQuoteById), quoteController.getQuoteByIdHandler)
  .patch(validate(quoteValidation.updateQuote), quoteController.updateQuoteHandler)
  .delete(validate(quoteValidation.deleteQuote), quoteController.deleteQuoteHandler);

module.exports = router;
