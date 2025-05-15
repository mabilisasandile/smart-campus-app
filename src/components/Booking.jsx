import React, { useState } from 'react';
import '../App.css';

const Booking = () => {

  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ type: 'study', room: '', date: '', time: '', module: '' });
  const registeredModules = ['Mathematics', 'Physics', 'Computer Science']; // Example modules

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleBooking = () => {
    setBookings([...bookings, newBooking]);
    setNewBooking({ type: 'study', room: '', date: '', time: '', module: '' });
  };

  return (
    <div className="booking-container">
      <h2>Booking</h2>
      <div className="booking-form">
        <select name="type" value={newBooking.type} onChange={handleInputChange}>
          <option value="study">Study Room</option>
          <option value="appointment">Appointment with Lecturer</option>
        </select>
        {newBooking.type === 'appointment' && (
          <select name="module" value={newBooking.module} onChange={handleInputChange}>
            <option value="">Select Module</option>
            {registeredModules.map((module, index) => (
              <option key={index} value={module}>{module}</option>
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
        <button onClick={handleBooking}>Book</button>
      </div>
      <div className="booking-list">
        <h3>Bookings</h3>
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.type === 'study' ? 'Study Room' : `Appointment (${booking.module})`} - {booking.room} - {booking.date} at {booking.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;