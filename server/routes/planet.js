const express = require("express");
const router = express.Router();
const { sequelize, Planet } = require("../models");

router.get("/planet/:planetName", async (req, res) => {
  const planetName = req.params.planetName;

  try {
    // Query the database to find the planet by its name
    const planet = await Planet.findOne({
      where: { Name: planetName },
    });

    if (planet) {
      // If the planet is found, send its details in the response
      console.log(planet);
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

router.get("/planets", async (req, res) => {
  try {
    // Query the database to get all planet names
    const planets = await Planet.findAll({
      attributes: ["Name", "Image_Link"], // Select only the Name and Image_Link attributes
    });

    if (planets) {
      // Extract planet names and send them in the response
      const planetNames = planets.map((planet) => ({
        Name: planet.Name,
        Image_Link: planet.Image_Link,
      }));
      res.json(planetNames);
    } else {
      // If no planets are found, return an empty array
      res.json([]);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
