const express = require("express");
const router = express.Router();
const Staff = require("../controllers/staffController");
// const app = express();
// app.use(bodyParser.json());

// Get all staff members
router.get("/", (req, res) => {
  Staff.getAllStaff(req, res);
});

// create a new staff
router.post("/", (req, res) => {
  Staff.createStaff(req, res);
});

// delete staff member by id
router.delete("/:id", (req, res) => {
  Staff.deleteStaff(req, res);
});

// Get staff member by id
router.get("/:id", (req, res) => {
  Staff.getStaffById(req, res);
});

// Update staff member by id

router.put("/:id", (req, res) => {
  Staff.updateStaff(req, res);
});

module.exports = router;
