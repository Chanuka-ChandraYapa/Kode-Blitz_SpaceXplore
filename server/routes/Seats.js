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
  try {
    const { seats, passengerId } = req.body;

    // Assuming each seat object in the seats array has a property `seat_id`
    for (const seat of seats) {
      await Seat.update({ passengerId }, { where: { seat_id: seat.seat_id } });
    }

    res.json({ message: "Seats reserved successfully" });
  } catch (error) {
    console.error("Error reserving seats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
