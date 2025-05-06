import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaBell, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Smart Campus</div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/timetable">Timetable</Link></li>
          <li><Link to="/maintenance">Maintenance</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </div>
      </nav>

      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
    </>
  );
}

export default Navbar;