// routes/faqRoutes.js
const express = require('express');

const router = express.Router();
const faqController = require('../../controllers/faq.controller');
// One-time create full FAQ list
router.post('/', faqController.createFaqList);

// Get all FAQs
router.get('/', faqController.getFaqList);

// Add a single FAQ item
router.post('/add', faqController.addFaqItem);

// Update FAQ item by index
router.put('/:index', faqController.updateFaqItem);

// Delete FAQ item by index
router.delete('/:index', faqController.deleteFaqItem);

module.exports = router;
