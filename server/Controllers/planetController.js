const { Planet, Location } = require("../models");

// Function to get planet details by name
const getPlanetDetails = async (planetName) => {
  try {
    const planet = await Planet.findOne({
      where: { Name: planetName },
    });

    return planet;
  } catch (error) {
    throw error;
  }
};

// Function to get planet locations by name
const getPlanetLocations = async (planetName) => {
  try {
    const planetLocations = await Location.findAll({
      where: { Planet_Name: planetName },
    });

    return planetLocations;
  } catch (error) {
    throw error;
  }
};

// Function to get all planet names with image links
const getAllPlanets = async () => {
  try {
    const planets = await Planet.findAll({
      attributes: ["Name", "Image_Link"],
    });

    return planets;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPlanetDetails,
  getPlanetLocations,
  getAllPlanets,
};
