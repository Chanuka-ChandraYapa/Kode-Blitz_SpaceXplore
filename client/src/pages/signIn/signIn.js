import React, { useState } from "react";
import "./signIn.css";
import PinkButton from "../../components/button/button";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      !formData.Username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
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
        <input
          className="signin-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="signin-error">{error}</p>}
        <PinkButton type="submit" text={"Sign In"} size={18} />
      </form>
    </div>
  );
};

export default SigninForm;
