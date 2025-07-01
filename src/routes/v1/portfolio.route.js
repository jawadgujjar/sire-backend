const express = require('express');
const validate = require('../../middlewares/validate');
const portfolioValidation = require('../../validations/portfolio.validation');
const portfolioController = require('../../controllers/portfolio.controller');

const router = express.Router();

// POST - Create a new portfolio
router
  .route('/')
  .post(validate(portfolioValidation.createPortfolio), portfolioController.createPortfolioHandler)
  .get(portfolioController.getAllPortfoliosHandler); // Endpoint to fetch all portfolios

// GET - Get portfolio by ID
router
  .route('/:id')
  .get(validate(portfolioValidation.getPortfolioById), portfolioController.getPortfolioByIdHandler) // Fetch by ID
  .patch(validate(portfolioValidation.updatePortfolio), portfolioController.updatePortfolioHandler) // Update portfolio by ID
  .delete(validate(portfolioValidation.getPortfolioById), portfolioController.deletePortfolioHandler); // Delete portfolio by ID

module.exports = router;
