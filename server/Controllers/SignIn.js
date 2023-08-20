const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { User } = require("../models");

// Route for user login
router.post("/signin", async (req, res) => {
  const { Username, password } = req.body;
  console.log(req.body);
  try {
    // Find the user by email
    const user = await User.findOne({
      where: { FullName: Username },
    });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.Password);

    // If passwords don't match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If authentication is successful, you can generate a token here for further authentication
    // For simplicity, we'll just return a success message
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
