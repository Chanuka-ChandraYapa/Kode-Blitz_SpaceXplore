import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signIn.css";
import PinkButton from "../../utils/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../config/config";

/**
 * The SigninForm component is a form that takes user input for username, email, password, and
 * confirmPassword and triggers a callback function onSignInSubmit when submitted.
 */
const SigninForm = ({ onSignInSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* The code snippet is defining several state variables and functions using the `useState` hook in
React. */
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!formData.Username || !formData.password) {
      setError("*All fields are required.");
      return;
    }
    onSignInSubmit();
    navigate("/");
    //   try {
    //     const response = await axios.post(`${API_BASE_URL}/signin`, formData);

    //     if (response.status === 200) {
    //       onSignInSubmit();
    //       navigate("/");
    //       // User logged in successfully
    //       const responseData = response.data;
    //       console.log(responseData);

    //       // Reset the form data and clear the error message
    //       setFormData({
    //         Username: "",
    //         password: "",
    //       });
    //       setError("");

    //       // Call the callback function to update authentication status in App.js

    //       // Optionally, you can redirect the user or perform other actions here.
    //     } else {
    //       const errorData = response.data;
    //       setError(errorData.message); // Change this line to access the correct message key
    //     }
    //   } catch (error) {
    //     console.error("Error sending form data:", error);
    //     setError("An error occurred while submitting the form.");
    //   }

    //   e.preventDefault();
  };

  return (
    <div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          /* The code snippet is defining an input field for the username in a sign-in form. */
          className="signin-input"
          type="text"
          name="Username"
          placeholder="UserName"
          value={formData.Username}
          onChange={handleChange}
        />
        <div className="password-input-container">
          <input
            /* The code snippet is defining an input field for the password in a sign-in form. */
            className="signup-input password-input"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        {error && <p className="signin-error">{error}</p>}
        <PinkButton type="submit" text={"Sign In"} size={18} />
      </form>
    </div>
  );
};

export default SigninForm;
