const express = require("express");
const router = express.Router();
const seatController = require("../Controllers/seatController");

// Route to get a list of all seats
router.get("/seats", seatController.getAllSeats);

// Route to reserve seats
router.post("/reserve-seats", seatController.reserveSeats);

module.exports = router;
