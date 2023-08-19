const express = require("express");
const router = express.Router();
const { Travel_Class } = require("../models");

router.get("/travel-classes", async (req, res) => {
  try {
    const travelClasses = await Travel_Class.findAll();
    res.json(travelClasses);
  } catch (error) {
    console.error("Error fetching travel classes:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
