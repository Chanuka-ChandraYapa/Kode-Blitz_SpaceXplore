const { sequelize, Flight_Schedule, Flight, SpaceShip } = require("../models");

// Function to get the latest 4 Flight_Schedules with additional information
const getLatestFlightSchedules = async (req, res) => {
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
          attributes: ["Flight_Price", "Duration", "Destination_Planet"],
        },
        {
          model: SpaceShip,
          as: "SpaceShip", // Use the alias specified in the model
          attributes: ["Model_Name", "image_link"],
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
};

// Function to get flight schedules by planet name
const getFlightSchedulesByPlanet = async (req, res) => {
  try {
    const planetName = req.params.planetname; // Get the planet name from the URL parameter

    // Query the database using Sequelize's built-in methods
    const flightSchedules = await Flight_Schedule.findAll({
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
          as: "Flight",
          attributes: ["Flight_Price", "Duration", "Destination_Planet"],
          where: { Destination_Planet: planetName }, // Filter by the destination planet
        },
        {
          model: SpaceShip,
          as: "SpaceShip",
          attributes: ["Model_Name", "image_link"],
        },
      ],
    });

    if (flightSchedules.length > 0) {
      res.json(flightSchedules);
    } else {
      res.status(404).json({
        message: `Flight Schedules not found for ${planetName}.`,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
};

module.exports = {
  getLatestFlightSchedules,
  getFlightSchedulesByPlanet,
};
