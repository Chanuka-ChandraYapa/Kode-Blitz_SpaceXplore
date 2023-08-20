const express = require("express");
const router = express.Router();
const spaceshipController = require("../Controllers/spaceshipController");

// Route to get spaceship details by flight ID
router.get("/spaceship/:flightid", async (req, res) => {
  const flightId = req.params.flightid;

  try {
    const result = await spaceshipController.getSpaceshipByFlightId(flightId);

    if (result) {
      const {
        startingDate,
        spaceshipID,
        spaceshipName,
        departurePlanet,
        destinationPlanet,
        price,
      } = result;
      res.json({
        startingDate,
        spaceshipID,
        spaceshipName,
        departurePlanet,
        destinationPlanet,
        price,
      });
    } else {
      res.status(404).json({ message: "Flight not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
