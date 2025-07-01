const AboutUs = require('../models/aboutus.model');

// Service to create About Us
const createAboutUs = async (data) => {
  // Ensure data.title and data.description are arrays before saving
  if (!Array.isArray(data.title) || !Array.isArray(data.description)) {
    throw new Error('Both title and description must be arrays.');
  }

  return AboutUs.create(data); // No need for await here
};

// Service to get all About Us
const getAllAboutUs = async () => {
  return AboutUs.find(); // No need for await here
};

// Service to get About Us by ID
const getAboutUsById = async (id) => {
  const aboutUs = await AboutUs.findById(id);
  if (!aboutUs) {
    throw new Error('About Us section not found.');
  }
  return aboutUs;
};

// Service to update About Us by ID
const updateAboutUs = async (id, data) => {
  // Ensure data.title and data.description are arrays before updating
  if (data.title && !Array.isArray(data.title)) {
    throw new Error('Title must be an array.');
  }
  if (data.description && !Array.isArray(data.description)) {
    throw new Error('Description must be an array.');
  }

  const aboutUs = await AboutUs.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!aboutUs) {
    throw new Error('About Us section not found.');
  }

  return aboutUs;
};

// Service to delete About Us by ID
const deleteAboutUs = async (id) => {
  const aboutUs = await AboutUs.findByIdAndDelete(id);
  if (!aboutUs) {
    throw new Error('About Us section not found.');
  }
  return aboutUs;
};

module.exports = {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
};
