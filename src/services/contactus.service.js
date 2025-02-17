const Contact = require('../models/contactus.model');

// Create a new contact
const createContact = (contactData) => {
  return Contact.create(contactData); // No need for await here
};

// Get all contacts
const getAllContacts = () => {
  return Contact.find(); // No need for await here
};

// Get contact by ID
const getContactById = (id) => {
  return Contact.findById(id); // No need for await here
};

// Update contact by ID
const updateContact = (id, updateData) => {
  return Contact.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }); // No need for await here
};

// Delete contact by ID
const deleteContact = (id) => {
  return Contact.findByIdAndDelete(id); // No need for await here
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
