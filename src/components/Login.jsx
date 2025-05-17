import { useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // context import

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Context usage

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const res = await axios.post(
        "https://smart-campus-backend-service.onrender.com/api/user/login",
        form
      );
      const data = res.data;

      if (!data.success) {
        setError(data.message || "Invalid username or password.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      login(data.role, data.userId, data.name, data.email); // updates global auth state for Navbar, etc.
      console.log("User Data: ", data.userId);
      console.log("User Name: ", data.name);
      console.log("User Role: ", data.role);
      console.log("User Email: ", data.email);

      if (data.role === "admin") {
        navigate("/admin");
      } else if (data.role === "lecturer") {
        navigate("/lecturer");
      } else {
        navigate("/student");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
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
          <br />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <br />
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a> <br />
          <a href="/signup">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;