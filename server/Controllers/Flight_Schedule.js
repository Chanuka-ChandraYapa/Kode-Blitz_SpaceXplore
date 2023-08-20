const express = require("express");
const router = express.Router();
const { sequelize, Flight_Schedule, Flight, SpaceShip } = require("../models");

// Route to get the latest 4 Flight_Schedules with additional information
router.get("/latest-flights", async (req, res) => {
  try {
    // Query the database using Sequelize's built-in methods
    const latestFlightSchedules = await Flight_Schedule.findAll({
      attributes: [
        "Schedule_ID",
        "Flight_ID",
        [sequelize.fn("date", sequelize.col("Starting_Time")), "Starting_Date"],
      ],
      order: [["Starting_Time", "DESC"]],
      limit: 4,
      include: [
        {
          model: Flight,
          as: "Flight", // Use the alias specified in the model
          attributes: ["Flight_Price", "Duration"],
        },
        {
          model: SpaceShip,
          as: "SpaceShip", // Use the alias specified in the model
          attributes: ["Model_Name"],
        },
      ],
    });

    if (latestFlightSchedules.length > 0) {
      // If Flight_Schedules are found, send their details in the response
      res.json(latestFlightSchedules);
    } else {
      // If no Flight_Schedules are found, return a 404 error
      res.status(404).json({ message: "Flight Schedules not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

// ... Your other routes for getting Flight_Schedules ...

module.exports = router;
