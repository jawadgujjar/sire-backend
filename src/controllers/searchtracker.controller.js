const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const searchTrackerService = require('../services/searchtracker.service');

// ✅ New Search Query Save Karna
const createSearch = catchAsync(async (req, res) => {
  const search = await searchTrackerService.createSearch(req.body);
  res.status(httpStatus.CREATED).json(search);
});

// ✅ Saari Search Queries Get Karna
const getAllSearches = catchAsync(async (req, res) => {
  const searches = await searchTrackerService.getAllSearches();
  res.status(httpStatus.OK).json(searches);
});

// ✅ Ek Specific Search Query Get Karna
const getSearchById = catchAsync(async (req, res) => {
  const search = await searchTrackerService.getSearchById(req.params.searchId);
  if (!search) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Search not found' });
  }
  res.status(httpStatus.OK).json(search);
});

// ✅ Search Query Delete Karna
const deleteSearch = catchAsync(async (req, res) => {
  const deletedSearch = await searchTrackerService.deleteSearch(req.params.searchId);
  if (!deletedSearch) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Search not found' });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSearch,
  getAllSearches,
  getSearchById,
  deleteSearch,
};
