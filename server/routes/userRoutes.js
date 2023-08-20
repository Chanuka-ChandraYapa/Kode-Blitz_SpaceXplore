const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

// Route for user registration (signup)
router.post("/signup", userController.userSignUp);

module.exports = router;
