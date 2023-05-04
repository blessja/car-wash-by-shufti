const Carwash = require('../models/carwashModel');
const User = require ('../models/userModel');


// Get all car washes
exports.getAllCarWashes = async (req, res) => {
  try {
    const carwashes = await Carwash.find();
    res.json(carwashes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single car wash
exports.getCarwashById = async (req, res) => {
  try {
    const carwash = await Carwash.findById(req.params.id);
    if (!carwash) res.status(404).json({ message: "Car wash not found" });
    else res.json(carwash);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(res);
}

/// Create  a new car wash

exports.createCarwash = async (req, res) => {
try { 
  const carwash = new Carwash(req.body);
  await carwash.save();
  res.status(201).json(carwash);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  };



  // get user of the carwash
  exports.getUsers = async (req, res) => {
    try {
      const carwash = await Carwash.findById(req.params.id);
      if (!carwash) res.status(404).json({ message: "Car wash not found" });
      else {
        res.json(carwash.users);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// create a new user of the carwash

exports.createUser = async (req, res) => {
  try {
    const carwash = await Carwash.findById(req.params.id);
    if (!carwash) res.status(404).json({ message: "Car wash not found" });
    else {
      const user = new User(req.body);
      carwash.users.push(user);
      await carwash.save();
      res.status(201).json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// Login a user

const loginUser = async (req, res) => { 
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ success: true, token: token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.loginUser = loginUser;