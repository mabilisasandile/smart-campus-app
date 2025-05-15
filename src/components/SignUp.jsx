import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/user/register", form);
      alert("Registered Successfully");
      setForm({
        name: "",
        email: "",
        password: "",
        role: "",
      });
      navigate("/"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="login-container">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
      <div className="login-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
