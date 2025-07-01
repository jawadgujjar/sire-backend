const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const contactService = require('../services/contactus.service');

// Create a new contact
const createContact = catchAsync(async (req, res) => {
  const contact = await contactService.createContact(req.body);
  res.status(httpStatus.CREATED).json(contact);
});

// Get all contacts
const getAllContacts = catchAsync(async (req, res) => {
  const contacts = await contactService.getAllContacts();
  res.status(httpStatus.OK).json(contacts);
});

// Get contact by ID
const getContactById = catchAsync(async (req, res) => {
  const contact = await contactService.getContactById(req.params.id);
  if (!contact) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Contact not found' });
  }
  res.status(httpStatus.OK).json(contact);
});

// Update contact by ID
const updateContact = catchAsync(async (req, res) => {
  const updatedContact = await contactService.updateContact(req.params.id, req.body);
  if (!updatedContact) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Contact not found' });
  }
  res.status(httpStatus.OK).json(updatedContact);
});

// Delete contact by ID
const deleteContact = catchAsync(async (req, res) => {
  const deletedContact = await contactService.deleteContact(req.params.id);
  if (!deletedContact) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Contact not found' });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
