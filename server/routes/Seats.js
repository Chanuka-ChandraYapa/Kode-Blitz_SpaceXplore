const express = require("express");
const router = express.Router();
const { Seat } = require("../models");

router.get("/seats", async (req, res) => {
  try {
    const listOfSeats = await Seat.findAll();
    res.json(listOfSeats);
  } catch (error) {
    console.error("Error retrieving seats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/reserve-seats", async (req, res) => {
  const seatInfoArray = req.body.seatInfoArray; // Extract seatInfoArray from req.body

  try {
    // Create seat records using a loop
    const createdSeats = await Promise.all(
      seatInfoArray.map(async (seatInfo) => {
        // Create the seat record
        return await Seat.create({
          Seat_Id: seatInfo.seatid,
          Spaceship_ID: seatInfo.Spaceship_ID,
          Class_ID: seatInfo.Class_id,
          // Add other relevant properties based on your Seat model
        });
      })
    );
    console.log(createdSeats);

    res.json({ message: "Seats reserved successfully" });
  } catch (error) {
    console.error("Error creating seats:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the seats." });
  }
});

module.exports = router;
