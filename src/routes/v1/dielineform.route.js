const express = require('express');

const router = express.Router();
const { createForm, getAllForms, getFormById, updateForm, deleteForm } = require('../../controllers/dielineform.controller');

router.post('/', createForm); // Create
router.get('/', getAllForms); // Read all
router.get('/:id', getFormById); // Read one
router.put('/:id', updateForm); // Update
router.delete('/:id', deleteForm); // Delete

module.exports = router;
