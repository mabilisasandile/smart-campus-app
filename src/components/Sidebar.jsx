import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ open, toggle }) {
  return (
    <div className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <ul onClick={toggle}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/booking">Book Room</Link></li>
        <li><Link to="/timetable">Timetable</Link></li>
        <li><Link to="/maintenance">Maintenance</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
