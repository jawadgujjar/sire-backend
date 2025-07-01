const CustomerFeedback = require('../models/customerfeedback.model');

// Create Customer Feedback
const createFeedback = async (feedbackData) => {
  try {
    // Ensure that the feedback data contains 'faqs' (if any) along with other details
    return await CustomerFeedback.create(feedbackData);
  } catch (error) {
    throw new Error(`Error creating feedback: ${error.message}`);
  }
};

// Get all feedbacks
const getAllFeedbacks = async () => {
  try {
    return await CustomerFeedback.find();
  } catch (error) {
    throw new Error(`Error fetching all feedbacks: ${error.message}`);
  }
};

// Get feedback by ID
const getFeedbackById = async (id) => {
  try {
    return await CustomerFeedback.findById(id);
  } catch (error) {
    throw new Error(`Error fetching feedback by ID: ${error.message}`);
  }
};

// Update feedback by ID
const updateFeedback = async (id, updateData) => {
  try {
    // Handle the update, making sure to allow for changes to the faqs field
    return await CustomerFeedback.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error(`Error updating feedback: ${error.message}`);
  }
};

// Delete feedback by ID
const deleteFeedback = async (id) => {
  try {
    return await CustomerFeedback.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting feedback: ${error.message}`);
  }
};

module.exports = {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};
