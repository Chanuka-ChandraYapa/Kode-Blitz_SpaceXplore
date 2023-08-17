const express = require("express");
const router = express.Router();
const { Passenger } = require("../models");

router.get("/", async (req, res) => {
  const listofPassenger = await Passenger.findAll();
  res.json(listofPassenger);
});

router.post("/", async (req, res) => {
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
});

module.exports = router;
