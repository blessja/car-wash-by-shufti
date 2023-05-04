const User = require("../models/userModel");
const  CarWash = require("../models/carwashModel");
const washHistory = require("../models/washHistoryModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');




// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Create a new user

const createUser = async (req, res) => {
  const { email, password, name, phone, role } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ success: false, error: "User already exists" });
  }
  const carwash = await CarWash.findOne({ email });
  if (carwash) {
    return res.status(400).json({ success: false, error: "Carwash already exists" });
  }
  const wash = await washHistory.findOne({ email });
  if (wash) {
    return res.status(400).json({ success: false, error: "Wash History already exists" });
  }
  try {
    const newUser = new User({ email, password, name, phone, role });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();
    res.status(201).json({ success: true, data: savedUser });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
  }
  
  
  // const carwashId = req.params.carwashId;
  // const carwash = await CarWash.findById(carwashId);
  // if (!carwash) {
  //   return res.status(400).json({ success: false, error: "Invalid carwash" });
  // }
  
  // try {
  //   const user = new User(req.body);
  //   const salt = await bcrypt.genSalt(10);
  //   user.password = await bcrypt.hash(user.password, salt);
  //   const savedUser = await user.save();
  //   res.status(201).json({ success: true, data: savedUser });
  // } catch (error) {
  //   res.status(500).json({ success: false, error: error.message });
  // }
};

// Login a user

// const loginUser = async (req, res) => { 
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ success: false, error: "Invalid credentials" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, error: "Invalid credentials" });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ success: true, token: token });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

module.exports = {
  getAllUsers,
  createUser,
  // loginUser,
 
};


