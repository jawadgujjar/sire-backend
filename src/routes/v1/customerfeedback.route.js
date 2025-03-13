const express = require('express');
const validate = require('../../middlewares/validate');
const customerFeedbackValidation = require('../../validations/customerfeedback.validation');
const customerFeedbackController = require('../../controllers/customerfeedback.controller');

const router = express.Router();

// POST - Create a new feedback
router
  .route('/')
  .post(validate(customerFeedbackValidation.createCustomerFeedback), customerFeedbackController.createCustomerFeedback)
  .get(customerFeedbackController.getAllCustomerFeedbacks); // Get all feedbacks

// GET, UPDATE, DELETE - Feedback by ID
router
  .route('/:id')
  .get(customerFeedbackController.getCustomerFeedbackById)
  .patch(validate(customerFeedbackValidation.updateCustomerFeedback), customerFeedbackController.updateCustomerFeedback)
  .delete(customerFeedbackController.deleteCustomerFeedback);

module.exports = router;
