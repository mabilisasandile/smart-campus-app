import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Timetable from "./components/Timetable";
import Maintenance from "./components/Maintenance";
import Notifications from "./components/Notifications";
import Dashboard from "./components/Dashboard";
import AdminPage from "./pages/AdminPage";
import StudentPage from "./pages/StudentPage";
import LecturerPage from "./pages/LecturerPage";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute expectedRoles={["admin"]}>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/lecturer"
          element={
            <PrivateRoute expectedRoles={["lecturer"]}>
              <LecturerPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute expectedRoles={["student"]}>
              <StudentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute expectedRoles={["admin", "lecturer"]}>
              <Dashboard />
            </PrivateRoute>
          }
          />
      </Routes>
    </>
  );
}

export default App;
