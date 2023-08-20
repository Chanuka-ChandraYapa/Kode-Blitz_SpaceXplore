const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

// Route for user login
router.post("/signin", authController.userSignIn);

module.exports = router;
