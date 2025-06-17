const express = require('express');

const instagramController = require('../../controllers/instagram.controller');

const router = express.Router();

router.get('/feed', instagramController.getFeed);

module.exports = router;
