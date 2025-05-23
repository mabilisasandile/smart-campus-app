import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoggedIn, logout, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // will update context state
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Smart Campus Service Portal</div>
        <ul className="nav-links">
          {role === 'admin' ? (
            <li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </li>
          ) : role === 'lecturer' ? (
            <li>
              <Link to="/lecturer">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/student">Dashboard</Link>
            </li>
          )}  
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/timetable">Timetable</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          {isLoggedIn ? (
            <li onClick={handleLogout}><Link>Logout</Link></li>
          ) : (
            <li><Link to="/">Login</Link></li>
          )}
        </ul>
        <div className="menu-icon" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </div>
      </nav>

      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
    </>
  );
}

export default Navbar;