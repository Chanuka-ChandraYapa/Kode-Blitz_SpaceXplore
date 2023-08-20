import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signIn.css";
import PinkButton from "../../utils/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

/**
 * The handleSubmit function is responsible for handling form submission, performing basic form
 * validation, and resetting form data and error message.
 * @param e - The parameter `e` is an event object that represents the event that triggered the form
 * submission. In this case, it is the form submission event.
 * @returns The function is not returning anything.
 */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.Username || !formData.password) {
      setError("*All fields are required.");
      return;
    }

    try {
      onSignInSubmit();
      navigate("/");

    } catch (error) {
      setError("Authentication failed."); // Set an appropriate error message
    }

    console.log("Form data:", formData);

    // Reset form data and error message
    setFormData({
      Username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
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
