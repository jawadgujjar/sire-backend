const express = require('express');
const validate = require('../../middlewares/validate');
const newsletterValidation = require('../../validations/newsletter.validation');
const newsletterController = require('../../controllers/newsletter.controller');

const router = express.Router();

// POST - Subscribe to Newsletter
router
  .route('/')
  .post(validate(newsletterValidation.createNewsletter), newsletterController.createNewsletter)
  .get(newsletterController.getAllNewsletters); // Get all newsletter subscriptions

// GET, UPDATE, DELETE - Newsletter by ID
router.route('/:id').get(newsletterController.getNewsletterById).delete(newsletterController.deleteNewsletter);

module.exports = router;
