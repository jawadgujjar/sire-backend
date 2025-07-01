const express = require('express');
const validate = require('../../middlewares/validate');
const contactValidation = require('../../validations/contactus.validation');
const contactController = require('../../controllers/contactus.controller');

const router = express.Router();

// POST - Create a new contact
router
  .route('/')
  .post(validate(contactValidation.createContact), contactController.createContact)
  .get(contactController.getAllContacts); // Get all contacts

// GET, UPDATE, DELETE - Contact by ID
router
  .route('/:id')
  .get(contactController.getContactById)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
