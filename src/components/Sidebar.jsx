import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaBook, FaChalkboardTeacher, FaTools, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ open, toggle }) {
  return (
    <div className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <ul onClick={toggle}>
        <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
        <li><Link to="/booking"><FaBook /> Book Room</Link></li>
        <li><Link to="/timetable"><FaChalkboardTeacher /> Timetable</Link></li>
        <li><Link to="/maintenance"><FaTools /> Maintenance</Link></li>
        <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
        <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;