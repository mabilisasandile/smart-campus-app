import React, { useEffect, useState } from 'react';
import '../App.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {
  const [systemUsage, setSystemUsage] = useState([]);
  const [bookingStats, setBookingStats] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  useEffect(() => {
    // Fetch data from API or database
    // Example data
    setSystemUsage([10, 20, 30, 40, 50]);
    setBookingStats([5, 15, 25, 35, 45]);
    setMaintenanceRequests([2, 4, 6, 8, 10]);
    setAnnouncements(['Welcome to the new semester!', 'Maintenance work on Friday']);
  }, []);

  const handleAnnouncementChange = (e) => {
    setNewAnnouncement(e.target.value);
  };

  const postAnnouncement = () => {
    setAnnouncements([...announcements, newAnnouncement]);
    setNewAnnouncement('');
  };

  const systemUsageData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'System Usage',
        data: systemUsage,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const bookingStatsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Bookings',
        data: bookingStats,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const maintenanceRequestsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Maintenance Requests',
        data: maintenanceRequests,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="management-section">
        <h3>Manage Announcements</h3>
        <div className="announcement-form">
          <input
            type="text"
            placeholder="New Announcement"
            value={newAnnouncement}
            onChange={handleAnnouncementChange}
          />
          <button onClick={postAnnouncement}>Post</button>
        </div>
        <ul className="announcement-list">
          {announcements.map((announcement, index) => (
            <li key={index}>{announcement}</li>
          ))}
        </ul>
      </div>
      <div className="chart-section">
        <div className="chart-container">
          <h3>System Usage</h3>
          <Bar data={systemUsageData} />
        </div>
        <div className="chart-container">
          <h3>Booking Statistics</h3>
          <Line data={bookingStatsData} />
        </div>
        <div className="chart-container">
          <h3>Maintenance Requests</h3>
          <Pie data={maintenanceRequestsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;