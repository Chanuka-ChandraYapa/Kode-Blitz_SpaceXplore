const express = require("express");
const router = express.Router();
const { sequelize, SpaceShip, Flight_Schedule } = require("../models");

router.get("/spaceship", async (req, res) => {
  const flightId = "001";

  try {
    const query = `
      SELECT
        fs.Starting_Time AS startingDate,
        ss.Model_Name AS spaceshipName
      FROM
        Flight_Schedules fs
      INNER JOIN
        SpaceShips ss ON fs.SpaceShip_ID = ss.SpaceShip_ID
      WHERE
        fs.Flight_ID = :flightId
      LIMIT 1;
    `;

    const result = await sequelize.query(query, {
      replacements: { flightId },
      type: sequelize.QueryTypes.SELECT,
    });

    if (result.length > 0) {
      const { startingDate, spaceshipName } = result[0];
      res.json({ startingDate, spaceshipName });
    } else {
      res.status(404).json({ message: "Flight not found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

module.exports = router;
