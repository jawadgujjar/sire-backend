const express = require('express');
const auth = require('../../middlewares/auth'); // If authentication is required
const validate = require('../../middlewares/validate');
const searchTrackerValidation = require('../../validations/searchtracker.validation');
const searchTrackerController = require('../../controllers/searchtracker.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(searchTrackerValidation.createSearch), searchTrackerController.createSearch)
  .get(auth('admin'), searchTrackerController.getAllSearches); // Admin can view all searches

router
  .route('/:searchId')
  .get(auth('admin'), searchTrackerController.getSearchById)
  .delete(auth('admin'), searchTrackerController.deleteSearch);

module.exports = router;
