const bcrypt = require("bcrypt");
const { User } = require("../models");

// Function to handle user login
const userSignIn = async (req, res) => {
  const { Username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({
      where: { FullName: Username },
    });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.Password);

    // If passwords don't match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If authentication is successful, you can generate a token here for further authentication
    // For simplicity, we'll just return a success message
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  userSignIn,
};
