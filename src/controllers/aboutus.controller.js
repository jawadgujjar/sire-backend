const AboutUs = require('../models/aboutus.model');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

// Create a new About Us
const createAboutUs = catchAsync(async (req, res) => {
  // Ensure that title and description are arrays
  if (!Array.isArray(req.body.title) || !Array.isArray(req.body.description)) {
    throw new ApiError(400, 'Title and description must be arrays.');
  }

  const aboutUs = await AboutUs.create(req.body);
  res.status(201).send(aboutUs);
});

// Get all About Us
const getAllAboutUs = catchAsync(async (req, res) => {
  const aboutUs = await AboutUs.find();
  res.status(200).send(aboutUs);
});

// Get About Us by ID
const getAboutUsById = catchAsync(async (req, res) => {
  const aboutUs = await AboutUs.findById(req.params.id);
  if (!aboutUs) {
    throw new ApiError(404, 'About Us section not found');
  }
  res.status(200).send(aboutUs);
});

// Update About Us by ID
const updateAboutUs = catchAsync(async (req, res) => {
  // Ensure that title and description are arrays when updating
  if (req.body.title && !Array.isArray(req.body.title)) {
    throw new ApiError(400, 'Title must be an array.');
  }
  if (req.body.description && !Array.isArray(req.body.description)) {
    throw new ApiError(400, 'Description must be an array.');
  }

  const aboutUs = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!aboutUs) {
    throw new ApiError(404, 'About Us section not found');
  }
  res.status(200).send(aboutUs);
});

// Delete About Us by ID
const deleteAboutUs = catchAsync(async (req, res) => {
  const aboutUs = await AboutUs.findByIdAndDelete(req.params.id);
  if (!aboutUs) {
    throw new ApiError(404, 'About Us section not found');
  }
  res.status(204).send();
});

module.exports = {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
};
