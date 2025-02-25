const express = require('express');
const validate = require('../../middlewares/validate');
const termValidation = require('../../validations/term.validation');
const termController = require('../../controllers/term.controller');

const router = express.Router();

// POST - Create Term
router.route('/').post(validate(termValidation.createTerm), termController.createTerm).get(termController.getAllTerms); // Get all Terms

// GET, UPDATE, DELETE - Term by ID
router
  .route('/:id')
  .get(termController.getTermById)
  .patch(validate(termValidation.updateTerm), termController.updateTerm)
  .delete(termController.deleteTerm);

module.exports = router;
