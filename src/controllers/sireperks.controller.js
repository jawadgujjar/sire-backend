const perkService = require('../services/sireperks.service');
const { validatePerk } = require('../validations/sireperks.validation');

const createPerk = async (req, res) => {
  try {
    validatePerk(req.body); // Validate the perk data
    const newPerk = await perkService.createPerk(req.body);
    res.status(201).json(newPerk);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPerks = async (req, res) => {
  try {
    const perks = await perkService.getAllPerks();
    res.status(200).json(perks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPerkById = async (req, res) => {
  try {
    const perk = await perkService.getPerkById(req.params.id);
    if (!perk) {
      return res.status(404).json({ error: 'Perk not found' });
    }
    res.status(200).json(perk);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePerk = async (req, res) => {
  try {
    validatePerk(req.body); // Validate the perk data
    const updatedPerk = await perkService.updatePerk(req.params.id, req.body);
    if (!updatedPerk) {
      return res.status(404).json({ error: 'Perk not found' });
    }
    res.status(200).json(updatedPerk);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePerk = async (req, res) => {
  try {
    const deletedPerk = await perkService.deletePerk(req.params.id);
    if (!deletedPerk) {
      return res.status(404).json({ error: 'Perk not found' });
    }
    res.status(200).json({ message: 'Perk deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPerk,
  getAllPerks,
  getPerkById,
  updatePerk,
  deletePerk,
};
