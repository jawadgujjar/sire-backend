const express = require('express');

const router = express.Router();
const profileController = require('../../controllers/profileaddress.controller');

// CRUD Routes
router.post('/', profileController.createShippingAddress); // Create
router.get('/:userId', profileController.getShippingAddress); // Read
router.put('/:userId', profileController.updateShippingAddress); // Update
router.delete('/:userId', profileController.deleteShippingAddress); // Delete

module.exports = router;
