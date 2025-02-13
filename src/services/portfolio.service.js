const Portfolio = require('../models/portfolio.model');

// Create a new portfolio
const createPortfolio = async (portfolioData) => {
  try {
    const portfolio = new Portfolio(portfolioData);
    await portfolio.save(); // Save portfolio to the database
    return portfolio;
  } catch (error) {
    throw new Error(`Error creating portfolio: ${error.message}`);
  }
};

// Get all portfolios
const getAllPortfolios = async () => {
  try {
    return Portfolio.find();
  } catch (error) {
    throw new Error(`Error fetching portfolios: ${error.message}`);
  }
};

// Get portfolio by ID
const getPortfolioById = async (id) => {
  try {
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      throw new Error('Portfolio not found');
    }
    return portfolio;
  } catch (error) {
    throw new Error(`Error fetching portfolio: ${error.message}`);
  }
};

// Update portfolio by ID
const updatePortfolio = async (id, updateData) => {
  try {
    return Portfolio.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Error updating portfolio: ${error.message}`);
  }
};

// Delete portfolio by ID
const deletePortfolio = async (id) => {
  try {
    return Portfolio.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting portfolio: ${error.message}`);
  }
};

module.exports = {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio,
};
