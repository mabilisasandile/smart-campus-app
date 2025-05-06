import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Booking from './components/Booking';
import Timetable from './components/Timetable';
import Maintenance from './components/Maintenance';
import Notifications from './components/Notifications';
import Dashboard from './components/Dashboard';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import LecturerPage from './pages/LecturerPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/lecturer" element={<LecturerPage />} />
      </Routes>
    </>
  );
}

export default App;