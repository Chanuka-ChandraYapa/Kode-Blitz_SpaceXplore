const { User } = require("../models");

// Function to handle user registration (signup)
const userSignUp = async (req, res) => {
  try {
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
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};

module.exports = {
  userSignUp,
};
