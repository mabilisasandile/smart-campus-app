import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { AuthContext } from "./AuthContext";


const Booking = () => {
  const { isLoggedIn, userId } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    userId: userId,
    type: "study",
    room: "",
    date: "",
    time: "",
    endTime: "",
    module: "",
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/unauthorized");
    }

    // Fetch bookings from the backend
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://smart-campus-backend-service.onrender.com/api/booking/fetchbookings");
        const data = await response.json();
        setBookings(data);
        console.log("Bookings fetched", data);
        
      } catch (error) {
        console.error("Error fetching bookings", error);
      }
    };
    fetchBookings();
  }, [isLoggedIn, navigate]);

  const registeredModules = ["Mathematics", "Physics", "DTD117V", "SFG117V", "HMD117V"]; // Example modules

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleBooking = async () => {
    try {
      const response = await fetch("https://smart-campus-backend-service.onrender.com/api/booking/createbooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });

      const savedBooking = await response.json();
      setBookings([...bookings, savedBooking]);
      setNewBooking({
        userId: userId,
        type: "study",
        room: "",
        date: "",
        time: "",
        endTime: "",
        module: "",
      });
      alert("Booking successful");
      console.log("Booking created", savedBooking);
    } catch (error) {
      console.error("Booking failed", error);
      alert("Booking failed");
    }
  };

  return (
    <div className="booking-container">
      <h2>Booking</h2>
      <div className="booking-form">
        <select
          name="type"
          value={newBooking.type}
          onChange={handleInputChange}
        >
          <option value="study">Study Room</option>
          <option value="appointment">Appointment with Lecturer</option>
        </select>
        {newBooking.type === "appointment" && (
          <select
            name="module"
            value={newBooking.module}
            onChange={handleInputChange}
          >
            <option value="">Select Module</option>
            {registeredModules.map((module, index) => (
              <option key={index} value={module}>
                {module}
              </option>
            ))}
          </select>
        )}
        <input
          type="text"
          name="room"
          placeholder="Room"
          value={newBooking.room}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newBooking.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newBooking.time}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="endTime"
          value={newBooking.endTime}
          onChange={handleInputChange}
        />
        <button onClick={handleBooking}>Book</button>
      </div>
      <div className="booking-list">
        <h3>Bookings</h3>
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.type === "study"
                ? "Study Room"
                : `Appointment (${booking.module})`}{" "}
              - {booking.room} - {booking.date} at {booking.time} to {booking.endTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
