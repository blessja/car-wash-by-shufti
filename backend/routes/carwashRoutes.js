const express = require('express');
const router = express.Router();
const Carwash = require('../controllers/carwashController');
const User = require('../controllers/userController');
const {loginUser} = require("../controllers/userController");




// Get all Carwash members
router.get('/', async (req, res) => {
    Carwash.getAllCarWashes(req, res);
});

// Create a new Carwash

router.post('/', async (req, res) => {
    Carwash.createCarwash(req, res);
    
});

// get a users of the carwash

router.get('/:id/users', async (req, res) => {
    Carwash.getUsers(req, res);
}

);

// get a single Carwash
router.get('/:id', async (req, res) => {
    Carwash.getCarwashById(req, res);
  });
    
// create a user fot the specified  Carwash
router.post('/:id/users', async (req, res) => {
    Carwash.createUser(req, res);
});

router.post("/carwashes/:carwashId/users/login",  (req, res) => {
    User.loginUser(req, res);
  });

  





module.exports = router;  
