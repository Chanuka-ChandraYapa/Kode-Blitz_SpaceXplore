import React, { useState } from "react";
import axios from "axios";
import "./signIn.css";
import PinkButton from "../../components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const API_BASE_URL = "http://localhost:5000";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    Username: "",
    password: "",
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

  const handleSubmit = async (e) => {
    // Basic form validation
    if (!formData.Username || !formData.password) {
      setError("*All fields are required.");
      return;
    }

    // Send the form data to the server using Axios
    try {
      const response = await axios.post(`${API_BASE_URL}/signin`, formData);

      if (response.status === 200) {
        // Change this line to 200
        // User logged in successfully
        const responseData = response.data;
        console.log(response);

        // Reset the form data and clear the error message
        setFormData({
          Username: "",
          password: "",
        });
        setError("");

        // Optionally, you can redirect the user or perform other actions here.
      } else {
        const errorData = response.data;
        setError(errorData.message); // Change this line to access the correct message key
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setError("An error occurred while submitting the form.");
    }
    e.preventDefault();
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
