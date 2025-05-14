import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.username || !form.password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/api/user/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      if (res.data.role === 'admin') {
        navigate('/admin');
      } else if (res.data.role === 'lecturer') {
        navigate('/lecturer');
      } else {
        navigate('/student');
      }
    } catch (err) {
      // Handle API errors
      setError('Invalid username or password.');
    }
  };

  return (
  <div className="login-container">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;