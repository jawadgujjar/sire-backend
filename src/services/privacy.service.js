const Privacy = require('../models/privacy.model');

// Service to create a Privacy section
const createPrivacy = async (data) => {
  // Ensure data contains arrays for title and description
  if (!Array.isArray(data.title) || !Array.isArray(data.description)) {
    throw new Error('Title and description should be arrays');
  }
  return Privacy.create(data); // No need for await here
};

// Service to get all Privacy sections
const getAllPrivacy = async () => {
  return Privacy.find(); // No need for await here
};

// Service to get Privacy by ID
const getPrivacyById = async (id) => {
  const privacy = await Privacy.findById(id);
  if (!privacy) {
    throw new Error('Privacy section not found');
  }
  return privacy;
};

// Service to update Privacy by ID
const updatePrivacy = async (id, data) => {
  // Ensure that the data being updated still contains arrays for title and description
  if (data.title && !Array.isArray(data.title)) {
    throw new Error('Title should be an array');
  }
  if (data.description && !Array.isArray(data.description)) {
    throw new Error('Description should be an array');
  }

  const privacy = await Privacy.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!privacy) {
    throw new Error('Privacy section not found');
  }
  return privacy;
};

// Service to delete Privacy by ID
const deletePrivacy = async (id) => {
  const privacy = await Privacy.findByIdAndDelete(id);
  if (!privacy) {
    throw new Error('Privacy section not found');
  }
  return privacy;
};

module.exports = {
  createPrivacy,
  getAllPrivacy,
  getPrivacyById,
  updatePrivacy,
  deletePrivacy,
};
