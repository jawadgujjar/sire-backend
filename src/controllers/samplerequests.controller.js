// controllers/sampleRequest.controller.js
const SampleRequest = require('../models/samplerequests.model');

// Create a new Sample Request
exports.createSampleRequest = async (req, res) => {
  try {
    const sampleRequest = new SampleRequest(req.body);
    const savedRequest = await sampleRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Sample Requests
exports.getAllSampleRequests = async (req, res) => {
  try {
    const requests = await SampleRequest.find().populate('userId');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Sample Requests by userId
exports.getSampleRequestsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const requests = await SampleRequest.find({ userId }).populate('userId');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single Sample Request by ID
exports.getSampleRequestById = async (req, res) => {
  try {
    const request = await SampleRequest.findById(req.params.id).populate('userId');
    if (!request) return res.status(404).json({ message: 'Sample request not found' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Sample Request
exports.updateSampleRequest = async (req, res) => {
  try {
    const updated = await SampleRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Sample request not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Sample Request
exports.deleteSampleRequest = async (req, res) => {
  try {
    const deleted = await SampleRequest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Sample request not found' });
    res.json({ message: 'Sample request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
