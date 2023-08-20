const express = require("express");
const router = express.Router();
const flightScheduleController = require("../Controllers/flightscheduleController");

// Route to get the latest 4 Flight_Schedules with additional information
router.get(
  "/latest-flights",
  flightScheduleController.getLatestFlightSchedules
);

// Route to get flight schedules by planet name
router.get(
  "/flight/:planetname",
  flightScheduleController.getFlightSchedulesByPlanet
);

module.exports = router;
