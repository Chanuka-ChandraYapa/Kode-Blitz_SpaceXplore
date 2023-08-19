const express = require("express");
const router = express.Router();
const { sequelize, Planet } = require("../models");

router.get("/planets", async (req, res) => {
  const planetName = "Mars";

  try {
    // Query the database to find the planet by its name
    const planet = await Planet.findOne({
      where: { Name: planetName },
    });

    if (planet) {
      // If the planet is found, send its details in the response
      res.json({
        Name: planet.Name,
        Description: planet.Description,
      });
    } else {
      // If the planet is not found, return a 404 error
      res.status(404).json({ message: "Planet not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
