const { Passenger } = require("../models");

// Get all passengers
const getAllPassengers = async (req, res) => {
  try {
    const listofPassenger = await Passenger.findAll();
    res.json(listofPassenger);
  } catch (error) {
    console.error("Error fetching passengers:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching passengers." });
  }
};

// Create passengers
const createPassengers = async (req, res) => {
  const passengerArray = req.body;

  try {
    // Create passenger records using a loop
    const createdPassengers = await Promise.all(
      passengerArray.map(async (passengerData) => {
        // Convert the date string to a Date object
        const dateOfBirth = passengerData.dateOfBirth;

        // Create the passenger record, passing only the date part of dob
        return await Passenger.create({
          fullName: passengerData.fullName,
          dateOfBirth: dateOfBirth,
          gender: passengerData.gender,
          isAdult: passengerData.isAdult,
        });
      })
    );
    console.log(createdPassengers);

    res.json(createdPassengers);
  } catch (error) {
    console.error("Error creating passengers:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the passengers." });
  }
};

module.exports = {
  getAllPassengers,
  createPassengers,
};
