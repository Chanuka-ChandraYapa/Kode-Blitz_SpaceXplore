const express = require("express");
const router = express.Router();
const { Flight_Schedule } = require("../models");

// Route to get Flight_Schedule by Flight_ID
router.get("/:flightId", async (req, res) => {
  const flightId = req.params.flightId;

  try {
    // Query the database to find the Flight_Schedule by Flight_ID
    const flightSchedule = await Flight_Schedule.findAll({
      where: { Flight_ID: flightId },
    });

    if (flightSchedule) {
      // If Flight_Schedule is found, send its details in the response
      res.json(flightSchedule);
    } else {
      // If Flight_Schedule is not found, return a 404 error
      res.status(404).json({ message: "Flight Schedule not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

// Route to get all Flight_Schedules
router.get("/", async (req, res) => {
  try {
    // Query the database to get all Flight_Schedules
    const flightSchedules = await Flight_Schedule.findAll();

    if (flightSchedules) {
      // Send all Flight_Schedules in the response
      res.json(flightSchedules);
    } else {
      // If no Flight_Schedules are found, return an empty array
      res.json([]);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
