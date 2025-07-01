const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync'); // You can create this utility for async handling
const termService = require('../services/term.service');

const createTerm = catchAsync(async (req, res) => {
  const term = await termService.createTerm(req.body);
  res.status(httpStatus.CREATED).send(term);
});

const getAllTerms = catchAsync(async (req, res) => {
  const terms = await termService.getAllTerms();
  res.status(httpStatus.OK).send(terms);
});

const getTermById = catchAsync(async (req, res) => {
  const term = await termService.getTermById(req.params.id);
  if (!term) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Term not found' });
  }
  res.status(httpStatus.OK).send(term);
});

const updateTerm = catchAsync(async (req, res) => {
  const term = await termService.updateTerm(req.params.id, req.body);
  if (!term) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Term not found' });
  }
  res.status(httpStatus.OK).send(term);
});

const deleteTerm = catchAsync(async (req, res) => {
  await termService.deleteTerm(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTerm,
  getAllTerms,
  getTermById,
  updateTerm,
  deleteTerm,
};
