const express = require('express');
const instantQuoteController = require('../../controllers/instantquote.controller');

const router = express.Router();

// POST - Create a new quote
router.route('/').post(instantQuoteController.createQuote).get(instantQuoteController.getAllQuotes); // Get all quotes

// GET/PUT/DELETE - Quote by ID
router
  .route('/:id')
  .get(instantQuoteController.getQuoteById)
  .put(instantQuoteController.updateQuote)
  .delete(instantQuoteController.deleteQuote);

module.exports = router;
