const express = require("express");
const router = express.Router();
const { Seat } = require("../models");

router.get("/reserve-seats", async (req, res) => {
  const listofSeat = await Seat.findAll();
  res.json(listofSeatr);
});

module.exports = router;
