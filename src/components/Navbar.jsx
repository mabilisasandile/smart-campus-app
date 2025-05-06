import React, { useState } from 'react';
import Sidebar from './Sidebar';
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
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
    </>
  );
}

export default Navbar;
