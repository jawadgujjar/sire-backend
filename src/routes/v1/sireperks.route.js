const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const perkValidation = require('../../validations/sireperks.validation');
const perkController = require('../../controllers/sireperks.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('managePerks'), validate(perkValidation.createPerk), perkController.createPerk)
  .get(auth('getPerks'), validate(perkValidation.getAllPerks), perkController.getAllPerks);

router
  .route('/:perkId')
  .get(auth('getPerks'), validate(perkValidation.getPerkById), perkController.getPerkById)
  .patch(auth('managePerks'), validate(perkValidation.updatePerk), perkController.updatePerk)
  .delete(auth('managePerks'), validate(perkValidation.deletePerk), perkController.deletePerk);

module.exports = router;
