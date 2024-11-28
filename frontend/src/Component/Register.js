import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import registercss from "./Register.module.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const location = useLocation();
  const isAdminRegistration = location.pathname.startsWith("/admin");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobileno: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAdminRegistration) {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:3001/register/admin",
          formData
        );
        console.log(response);
        setMessage(response.data);
        alert("successfully registered");
        // navigate('/profile', { state: { formData } });
      } catch (error) {
        setError(error);
        alert("error");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:3001/register/student",
          formData
        );
        console.log(response);
        setMessage(response.data);
        alert("successfully registered");
        // navigate('/profile', { state: { formData } });
      } catch (error) {
        setError(error);
        alert("error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={registercss.main}>
      <div className="box">
        <form className={registercss.ff} onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="write your name here "
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="write your password "
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="write your email"
          />

          <label htmlFor="mobileno">Mobile Number:</label>
          <input
            type="text"
            id="mobileno"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
            placeholder="write your mobileno"
            maxLength="10"
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="type your address here"
          />
          <button type="submit">Register</button>
          {loading && <h3 style={{ color: "blue" }}>Proecssing..</h3>}
          {error && <h3 style={{ color: "red" }}>{error.message}</h3>}
          {message && <h3 style={{ color: "green" }}>{message}</h3>}
        </form>
      </div>
    </div>
  );
};

export default Register;
