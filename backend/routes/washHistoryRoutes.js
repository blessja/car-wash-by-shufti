const express = require("express");
const router = express.Router();
const washHistory = require("../controllers/washHistoryController");

// add new history
router.post("/", (req, res) => {
  washHistory.createWashHistory(req, res);
});

// Get all history
router.get("/", (req, res) => {
  washHistory.getAllWashHistory(req, res);
});

// Get history by user id

router.get("/:id", (req, res) => {
  washHistory.getWashHistoryById(req, res);
});

// Update history by id

router.put("/:id", (req, res) => {
  washHistory.updateWashHistoryById(req, res);
});

// Delete history by id

router.delete("/:id", (req, res) => {
  washHistory.deleteWashHistoryById(req, res);
});



module.exports = router;
