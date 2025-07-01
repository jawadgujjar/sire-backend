const express = require('express');

const router = express.Router();
const controller = require('../../controllers/approveddesign.controller');

router.post('/', controller.createDesign);
router.get('/', controller.getAllDesigns);
router.get('/:id', controller.getDesignById);
router.put('/:id', controller.updateDesign);
router.delete('/:id', controller.deleteDesign);

module.exports = router;
