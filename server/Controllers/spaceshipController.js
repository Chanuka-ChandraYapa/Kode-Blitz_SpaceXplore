const { sequelize } = require("../models");

// Function to get spaceship details by flight ID
const getSpaceshipByFlightId = async (flightId) => {
  try {
    const query = `
      SELECT
        fs.Starting_Time AS startingDate,
        fs.SpaceShip_ID AS spaceshipID,
        ss.Model_Name AS spaceshipName,
        f.Origin_Planet AS departurePlanet,
        f.Destination_Planet AS destinationPlanet,
        f.Flight_Price AS price
      FROM
        Flight_Schedules fs
      INNER JOIN
        SpaceShips ss ON fs.SpaceShip_ID = ss.SpaceShip_ID
      INNER JOIN
        Flights f ON fs.Flight_ID = f.Flight_ID
      WHERE
        fs.Flight_ID = :flightId
      LIMIT 1;
    `;

    const result = await sequelize.query(query, {
      replacements: { flightId },
      type: sequelize.QueryTypes.SELECT,
    });

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSpaceshipByFlightId,
};
