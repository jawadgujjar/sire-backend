const Privacy = require('../models/privacy.model');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

// Create a new Privacy section
const createPrivacy = catchAsync(async (req, res) => {
  // Ensure the request body contains arrays for title and description
  if (!Array.isArray(req.body.title) || !Array.isArray(req.body.description)) {
    throw new ApiError(400, 'Title and description must be arrays');
  }

  const privacy = await Privacy.create(req.body);
  res.status(201).send(privacy);
});

// Get all Privacy sections
const getAllPrivacy = catchAsync(async (req, res) => {
  const privacy = await Privacy.find();
  res.status(200).send(privacy);
});

// Get Privacy section by ID
const getPrivacyById = catchAsync(async (req, res) => {
  const privacy = await Privacy.findById(req.params.id);
  if (!privacy) {
    throw new ApiError(404, 'Privacy section not found');
  }
  res.status(200).send(privacy);
});

// Update Privacy section by ID
const updatePrivacy = catchAsync(async (req, res) => {
  // Ensure the request body contains arrays for title and description if provided
  if (req.body.title && !Array.isArray(req.body.title)) {
    throw new ApiError(400, 'Title must be an array');
  }
  if (req.body.description && !Array.isArray(req.body.description)) {
    throw new ApiError(400, 'Description must be an array');
  }

  const privacy = await Privacy.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!privacy) {
    throw new ApiError(404, 'Privacy section not found');
  }
  res.status(200).send(privacy);
});

// Delete Privacy section by ID
const deletePrivacy = catchAsync(async (req, res) => {
  const privacy = await Privacy.findByIdAndDelete(req.params.id);
  if (!privacy) {
    throw new ApiError(404, 'Privacy section not found');
  }
  res.status(204).send();
});

module.exports = {
  createPrivacy,
  getAllPrivacy,
  getPrivacyById,
  updatePrivacy,
  deletePrivacy,
};
