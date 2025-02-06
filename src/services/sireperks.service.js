const Perk = require('../models/sireperks.model');

const createPerk = async (perkData) => {
  try {
    const newPerk = new Perk(perkData);
    await newPerk.save();
    return newPerk;
  } catch (error) {
    throw new Error('Error creating perk');
  }
};

const getAllPerks = async () => {
  try {
    return await Perk.find();
  } catch (error) {
    throw new Error('Error fetching perks');
  }
};

const getPerkById = async (id) => {
  try {
    return await Perk.findById(id);
  } catch (error) {
    throw new Error('Error fetching perk');
  }
};

const updatePerk = async (id, perkData) => {
  try {
    return await Perk.findByIdAndUpdate(id, perkData, { new: true });
  } catch (error) {
    throw new Error('Error updating perk');
  }
};

const deletePerk = async (id) => {
  try {
    return await Perk.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting perk');
  }
};

module.exports = {
  createPerk,
  getAllPerks,
  getPerkById,
  updatePerk,
  deletePerk,
};
