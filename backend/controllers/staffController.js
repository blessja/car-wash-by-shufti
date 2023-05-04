const Staff = require('../models/staffModel');

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json({
      status:'success',
      data: {
        staff,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        staff,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
 
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        staff,
      },
    });
    
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
  
 
};

exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        staff,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'deleted successfully',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
