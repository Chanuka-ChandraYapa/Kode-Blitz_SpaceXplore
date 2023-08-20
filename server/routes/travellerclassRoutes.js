const express = require("express");
const router = express.Router();
const travelClassController = require("../Controllers/travellerclassController");

// Route to get all travel classes
router.get("/travel-classes", travelClassController.getAllTravelClasses);

module.exports = router;
