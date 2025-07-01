const express = require('express');
const validate = require('../../middlewares/validate');
const privacyValidation = require('../../validations/privacy.validation');
const privacyController = require('../../controllers/privacy.controller');

const router = express.Router();

// POST - Create Privacy section
router
  .route('/')
  .post(validate(privacyValidation.createPrivacy), privacyController.createPrivacy)
  .get(privacyController.getAllPrivacy); // Get all Privacy sections

// GET, UPDATE, DELETE - Privacy by ID
router
  .route('/:id')
  .get(privacyController.getPrivacyById)
  .patch(validate(privacyValidation.updatePrivacy), privacyController.updatePrivacy)
  .delete(privacyController.deletePrivacy);

module.exports = router;
