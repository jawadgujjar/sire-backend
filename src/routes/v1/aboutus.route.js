const express = require('express');
const validate = require('../../middlewares/validate');
const aboutUsValidation = require('../../validations/aboutus.validation');
const aboutUsController = require('../../controllers/aboutus.controller');

const router = express.Router();

// POST - Create About Us section
router
  .route('/')
  .post(validate(aboutUsValidation.createAboutUs), aboutUsController.createAboutUs)
  .get(aboutUsController.getAllAboutUs); // Get all About Us sections

// GET, UPDATE, DELETE - About Us by ID
router
  .route('/:id')
  .get(aboutUsController.getAboutUsById)
  .patch(validate(aboutUsValidation.updateAboutUs), aboutUsController.updateAboutUs)
  .delete(aboutUsController.deleteAboutUs);

module.exports = router;
