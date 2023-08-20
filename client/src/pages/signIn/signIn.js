import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signIn.css";
import PinkButton from "../../components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SigninForm = ({ onSignInSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
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
    if (!formData.Username || !formData.password) {
      setError("*All fields are required.");
      return;
    }

    // Here you can implement your actual authentication logic
    // For simplicity, I'll just log the data to the console
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
          className="signin-input"
          type="text"
          name="Username"
          placeholder="UserName"
          value={formData.Username}
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
        {error && <p className="signin-error">{error}</p>}
        <PinkButton type="submit" text={"Sign In"} size={18} />
      </form>
    </div>
  );
};

export default SigninForm;
