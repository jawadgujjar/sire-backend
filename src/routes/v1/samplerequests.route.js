const express = require('express');

const router = express.Router();
const sampleRequestController = require('../../controllers/samplerequests.controller');

router.post('/', sampleRequestController.createSampleRequest);
router.get('/', sampleRequestController.getAllSampleRequests);
router.get('/user/:userId', sampleRequestController.getSampleRequestsByUser);
router.get('/:id', sampleRequestController.getSampleRequestById);
router.put('/:id', sampleRequestController.updateSampleRequest);
router.delete('/:id', sampleRequestController.deleteSampleRequest);

module.exports = router;
