const SearchTracker = require('../models/searchtracker.model');

// Search Query Save Karna
const createSearch = async (searchData) => SearchTracker.create(searchData);

// Saari Search Queries Get Karna
const getAllSearches = async () => SearchTracker.find().sort({ createdAt: -1 });

// Specific Search Query Get Karna (by ID)
const getSearchById = async (id) => SearchTracker.findById(id);

// Search Query Delete Karna
const deleteSearch = async (id) => SearchTracker.findByIdAndDelete(id);

module.exports = {
  createSearch,
  getAllSearches,
  getSearchById,
  deleteSearch,
};
