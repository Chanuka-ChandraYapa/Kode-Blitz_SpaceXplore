import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import PinkButton from "../../components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const API_BASE_URL = "http://localhost:5000";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("*All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("*Passwords do not match.");
      return;
    }

    try {
      const response = axios.post(`${API_BASE_URL}/signUp`, formData);

      if (response.status === 201) {
        // User created successfully
        const responseData = response.data;
        console.log(responseData.message);

        // Reset the form data and clear the error message
        setFormData({
          Username: "",
          password: "",
        });
        setError("");

        // Optionally, you can redirect the user or perform other actions here.
      } else {
        const errorData = response.data;
        setError(errorData.error);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setError("An error occurred while submitting the form.");
    }
    e.preventDefault();
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          className="signup-input"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          className="signup-input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="password-input-container">
          <input
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
        <input
          className="signup-input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <p className="signup-error">{error}</p>}
        <PinkButton type="submit" text={"Sign Up"} size={20} />
      </form>
      <div className="sign-in">
        Already registered ?<a href="/signIn"> Sign In</a>
      </div>
    </div>
  );
};

export default SignUpForm;
