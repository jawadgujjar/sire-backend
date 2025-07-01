const catchAsync = require('../utils/catchAsync');
const newsletterService = require('../services/newsletter.service');

// Create a new newsletter subscription
const createNewsletter = catchAsync(async (req, res) => {
  const { email } = req.body;
  const newsletter = await newsletterService.createNewsletter(email);
  res.status(201).send(newsletter);
});

// Get all newsletter subscriptions
const getAllNewsletters = catchAsync(async (req, res) => {
  const newsletters = await newsletterService.getAllNewsletters();
  res.status(200).send(newsletters);
});

// Get a newsletter by ID
const getNewsletterById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newsletter = await newsletterService.getNewsletterById(id);
  res.status(200).send(newsletter);
});

// Delete a newsletter subscription by ID
const deleteNewsletter = catchAsync(async (req, res) => {
  const { id } = req.params;
  await newsletterService.deleteNewsletter(id);
  res.status(204).send();
});

module.exports = {
  createNewsletter,
  getAllNewsletters,
  getNewsletterById,
  deleteNewsletter,
};
