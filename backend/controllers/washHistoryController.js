const WashHistory = require('../models/washHistoryModel');

// Create a new wash history record
exports.createWashHistory = async (req, res) => {
  const { carWash, user } = req.body;

  try {
    const washHistory = new WashHistory({ carWash, user });
    await washHistory.save();
    res.status(201).json({ message: 'Wash history created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the wash history.' });
  }
};

// Get all wash history records
exports.getAllWashHistory = async (req, res) => {
  try {
    const washHistory = await WashHistory.find();
    res.status(200).json(washHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while getting the wash history.' });
  }
}
 
// Get wash history by id
exports.getWashHistoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const washHistory = await WashHistory.findById(id);
    res.status(200).json(washHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while getting the wash history.' });
  }
}

// Update wash history by id

exports.updateWashHistoryById = async (req, res) => {
  const { id } = req.params;
  const { carWash } = req.body;

  try {
    const washHistory = await WashHistory.findByIdAndUpdate(id, { carWash }, { new: true });
    res.status(200).json(washHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the wash history.' });
  }
}

// Get wash history by user ID
exports.getWashHistoryByUserId = async (userId) => {
  try {
    const washHistory = await WashHistory.find({ user: userId });
    return washHistory;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while getting the wash history by user ID.');
  }
}
