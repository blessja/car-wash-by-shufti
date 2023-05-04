const express = require("express");
const router = express.Router();
const User = require("../controllers/userController");
const Carwash = require("../controllers/carwashController");
const washHistoryController = require("../controllers/washHistoryController");
const {loginUser} = require("../controllers/userController");


// Get all users
router.get("/", (req, res) => {
  User.getAllUsers(req, res);
});

// Create a new user

router.post("/carwashes/carwashId/users", (req, res) => {
  User.createUser(req, res);
});

// Login a user 

// router.post("/carwashes/:carwashId/users/login", (req, res) => {
//   User.loginUser(req, res);
// });
// router.post('/login', loginUser)

// Logout a user




module.exports = router;
