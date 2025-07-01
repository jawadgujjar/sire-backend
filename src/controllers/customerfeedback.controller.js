const customerFeedbackService = require('../services/customerfeedback.service');

// Create Customer Feedback
const createCustomerFeedback = async (req, res) => {
  try {
    const feedbackData = req.body;

    // Validate faqs (optional, but should be an array of objects with title and description)
    if (feedbackData.faqs && Array.isArray(feedbackData.faqs)) {
      feedbackData.faqs.forEach((faq) => {
        if (!faq.title || !faq.description) {
          return res.status(400).json({ message: 'Each FAQ must contain a title and description.' });
        }
      });
    }

    // Create the feedback
    const feedback = await customerFeedbackService.createFeedback(feedbackData);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Customer Feedbacks
const getAllCustomerFeedbacks = async (req, res) => {
  try {
    const feedbacks = await customerFeedbackService.getAllFeedbacks();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Customer Feedback by ID
const getCustomerFeedbackById = async (req, res) => {
  try {
    const feedback = await customerFeedbackService.getFeedbackById(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Customer Feedback
const updateCustomerFeedback = async (req, res) => {
  try {
    const updateData = req.body;

    // If faqs are included in the update, we ensure they are structured correctly
    if (updateData.faqs && Array.isArray(updateData.faqs)) {
      updateData.faqs.forEach((faq) => {
        if (!faq.title || !faq.description) {
          return res.status(400).json({ message: 'Each FAQ must contain a title and description.' });
        }
      });
    }

    const updatedFeedback = await customerFeedbackService.updateFeedback(req.params.id, updateData);
    if (!updatedFeedback) return res.status(404).json({ message: 'Feedback not found' });
    res.status(200).json(updatedFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Customer Feedback
const deleteCustomerFeedback = async (req, res) => {
  try {
    const deletedFeedback = await customerFeedbackService.deleteFeedback(req.params.id);
    if (!deletedFeedback) return res.status(404).json({ message: 'Feedback not found' });
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCustomerFeedback,
  getAllCustomerFeedbacks,
  getCustomerFeedbackById,
  updateCustomerFeedback,
  deleteCustomerFeedback,
};
