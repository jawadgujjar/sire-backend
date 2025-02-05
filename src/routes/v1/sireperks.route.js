const express = require('express');
const perkController = require('../../controllers/sireperks.controller');

const router = express.Router();

router.post('/', perkController.createPerk);
router.get('/', perkController.getAllPerks);
router.get('/perks/:id', perkController.getPerkById);
router.put('/perks/:id', perkController.updatePerk);
router.delete('/perks/:id', perkController.deletePerk);

module.exports = router;
