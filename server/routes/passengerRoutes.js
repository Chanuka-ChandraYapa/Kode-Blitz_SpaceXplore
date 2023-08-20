const express = require("express");
const router = express.Router();
const passengerController = require("../Controllers/passengerController");

// Get all passengers
router.get("/passenger-details", passengerController.getAllPassengers);

// Create passengers
router.post("/passenger-details", passengerController.createPassengers);

module.exports = router;
