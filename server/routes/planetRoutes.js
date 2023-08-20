const express = require("express");
const router = express.Router();
const planetController = require("../Controllers/planetController");

// Route to get planet details by name
router.get("/planet/:planetName", async (req, res) => {
  const planetName = req.params.planetName;

  try {
    const planet = await planetController.getPlanetDetails(planetName);

    if (planet) {
      res.json({
        Name: planet.Name,
        Description: planet.Description,
      });
    } else {
      res.status(404).json({ message: "Planet not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

// Route to get planet locations by name
router.get("/planet-location/:planetName", async (req, res) => {
  const planetName = req.params.planetName;

  try {
    const planetLocations = await planetController.getPlanetLocations(
      planetName
    );

    if (planetLocations.length > 0) {
      const planetLocationLinks = planetLocations.map((location) => ({
        location: location.Location_Name,
        link: location.image_link,
      }));

      res.json({ planetLocationLinks });
    } else {
      res.status(404).json({ message: "Planet not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

// Route to get all planet names with image links
router.get("/planets", async (req, res) => {
  try {
    const planets = await planetController.getAllPlanets();

    if (planets) {
      const planetNames = planets.map((planet) => ({
        Name: planet.Name,
        Image_Link: planet.Image_Link,
      }));
      res.json(planetNames);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
