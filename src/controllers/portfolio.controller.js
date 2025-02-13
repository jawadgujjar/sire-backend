const PortfolioService = require('../services/portfolio.service');

const createPortfolioHandler = async (req, res) => {
  try {
    const portfolio = await PortfolioService.createPortfolio(req.body);
    res.status(201).json(portfolio); // Return the created portfolio with status 201
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation errors or other issues
  }
};

const getAllPortfoliosHandler = async (req, res) => {
  try {
    const portfolios = await PortfolioService.getAllPortfolios();
    res.status(200).json(portfolios); // Return all portfolios with status 200
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle any errors
  }
};

const getPortfolioByIdHandler = async (req, res) => {
  try {
    const portfolio = await PortfolioService.getPortfolioById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' }); // Handle portfolio not found
    }
    res.status(200).json(portfolio); // Return portfolio details with status 200
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors like invalid ID format, etc.
  }
};

const updatePortfolioHandler = async (req, res) => {
  try {
    const updatedPortfolio = await PortfolioService.updatePortfolio(req.params.id, req.body);
    if (!updatedPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' }); // Handle portfolio not found
    }
    res.status(200).json(updatedPortfolio); // Return updated portfolio
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation or other errors
  }
};

const deletePortfolioHandler = async (req, res) => {
  try {
    const deletedPortfolio = await PortfolioService.deletePortfolio(req.params.id);
    if (!deletedPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' }); // Handle portfolio not found
    }
    res.status(200).json({ message: 'Portfolio deleted successfully' }); // Success message on delete
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors during deletion
  }
};

module.exports = {
  createPortfolioHandler,
  getAllPortfoliosHandler,
  getPortfolioByIdHandler,
  updatePortfolioHandler,
  deletePortfolioHandler,
};
