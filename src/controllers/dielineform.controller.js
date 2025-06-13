const DielineForm = require('../models/dielineform.model');

// Create
const createForm = async (req, res) => {
  try {
    const form = await DielineForm.create(req.body);
    res.status(201).json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read all
const getAllForms = async (req, res) => {
  try {
    const forms = await DielineForm.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read one
const getFormById = async (req, res) => {
  try {
    const form = await DielineForm.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateForm = async (req, res) => {
  try {
    const form = await DielineForm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteForm = async (req, res) => {
  try {
    const form = await DielineForm.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
