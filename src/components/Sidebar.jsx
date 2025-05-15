import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaBook,
  FaChalkboardTeacher,
  FaTools,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

function Sidebar({ open, toggle }) {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // will update context state
    navigate("/");
  };

  return (
    <div className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <ul onClick={toggle}>
        <li>
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/booking">
            <FaBook /> Book Room
          </Link>
        </li>
        <li>
          <Link to="/timetable">
            <FaChalkboardTeacher /> Timetable
          </Link>
        </li>
        <li>
          <Link to="/maintenance">
            <FaTools /> Maintenance
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <FaBell /> Notifications
          </Link>
        </li>
        {isLoggedIn ? (
          <li onClick={handleLogout}>
            <Link>
              <FaSignOutAlt /> Logout
          </Link>
          </li>
        ) : (
          <li>
            <Link to="/">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
