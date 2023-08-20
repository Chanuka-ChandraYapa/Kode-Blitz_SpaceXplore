const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/signup", async (req, res) => {
  try {
    //const { fullName, email, password } = req.body;
    console.log(req.body);
    // Perform any necessary validation here

    // Create a new user in the database
    const newUser = await User.create({
      FullName: req.body.fullName,
      Email: req.body.email,
      Password: req.body.password, // Password will be hashed automatically due to Sequelize model setup
    });
    // Respond with a success message or the newly created user
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
  }
});

module.exports = router;
