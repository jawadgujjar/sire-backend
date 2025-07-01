const Term = require('../models/term.model');

const createTerm = async (termData) => {
  const term = await Term.create(termData);
  return term;
};

const getAllTerms = async () => {
  return Term.find();
};

const getTermById = async (id) => {
  return Term.findById(id);
};

const updateTerm = async (id, termData) => {
  const term = await Term.findByIdAndUpdate(id, termData, { new: true });
  return term;
};

const deleteTerm = async (id) => {
  await Term.findByIdAndDelete(id);
};

module.exports = {
  createTerm,
  getAllTerms,
  getTermById,
  updateTerm,
  deleteTerm,
};
