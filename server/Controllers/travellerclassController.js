const { Travel_Class } = require("../models");

// Function to get all travel classes
const getAllTravelClasses = async (req, res) => {
  try {
    const travelClasses = await Travel_Class.findAll();
    res.json(travelClasses);
  } catch (error) {
    console.error("Error fetching travel classes:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getAllTravelClasses,
};
