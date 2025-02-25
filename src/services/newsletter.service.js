const { Newsletter } = require('../models');

// Create a new newsletter subscription
const createNewsletter = async (email) => {
  const existingNewsletter = await Newsletter.findOne({ email });
  if (existingNewsletter) {
    throw new Error('This email is already subscribed.');
  }
  const newsletter = await Newsletter.create({ email });
  return newsletter;
};

// Get all newsletters
const getAllNewsletters = async () => {
  return Newsletter.find();
};

// Get a newsletter by ID
const getNewsletterById = async (id) => {
  const newsletter = await Newsletter.findById(id);
  if (!newsletter) {
    throw new Error('Newsletter not found.');
  }
  return newsletter;
};

// Delete a newsletter by ID
const deleteNewsletter = async (id) => {
  const newsletter = await Newsletter.findByIdAndDelete(id);
  if (!newsletter) {
    throw new Error('Newsletter not found.');
  }
};

module.exports = {
  createNewsletter,
  getAllNewsletters,
  getNewsletterById,
  deleteNewsletter,
};
