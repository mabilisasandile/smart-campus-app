import React from 'react';
import { Link } from 'react-router-dom';
import './StudentPage.css';

const StudentPage = () => {
  return (
    <div className="stud-container">
      <header className="stud-header">
        <h1>Welcome to Smart Campus Services Portal</h1>
        <p>Student Dashboard</p>
      </header>

      <div className="stud-actions">
        <Link to="/timetable" className="stud-card">
          <h3>📅 View Timetable</h3>
          <p>Access your class schedule and updates</p>
        </Link>

        <Link to="/booking" className="stud-card">
          <h3>📚 Book Study Room</h3>
          <p>Reserve available study rooms</p>
        </Link>

        <Link to="/maintenance" className="stud-card">
          <h3>🛠️ Report Issue</h3>
          <p>Report campus maintenance problems</p>
        </Link>

        <Link to="/notifications" className="stud-card">
          <h3>🔔 Notifications</h3>
          <p>View alerts and announcements</p>
        </Link>
      </div>
    </div>
  );
};

export default StudentPage;