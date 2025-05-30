import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../App.css';
import { AuthContext } from "./AuthContext";

const Timetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/unauthorized");
    }

    // Fetch timetable data from the backend
    try {
      const fetchTimetable = async () => {
        const res = await axios.get('https://smart-campus-backend-service.onrender.com/api/timetable/fetchtimetable');
        setTimetableData(res.data);
      };

      fetchTimetable();
    } catch (error) {
      console.error('Error fetching timetable:', error);
    }
    
  }, [isLoggedIn, navigate]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push('');
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const getClassForDay = (day) => {
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
    const timetableDay = timetableData.find((t) => t.day === daysOfWeek[dayOfWeek]);
    return timetableDay ? timetableDay.classes.join(', ') : '';
  };

  return (
    <div className="timetable-calendar-container">
      {timetableData.length > 0 ? (
        <div className="timetable-card">
        <h2>Weekly Timetable</h2>
        <table className="timetable">
          <thead>
            <tr>
              <th>Day</th>
              <th>Classes</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((day, index) => (
              <tr key={index}>
                <td>{day.day}</td>
                <td>{day.classes.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : (
        <div className="timetable-card">
          <h2>Searching Timetable...</h2>
        </div>
      )}
      
      <div className="calendar-card">
        <h2>Calendar - {monthNames[currentMonth]} {currentYear}</h2>
        <table className="calendar">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map((_, weekIndex) => (
              <tr key={weekIndex}>
                {calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => (
                  <td key={dayIndex}>
                    {day}
                    <div className="classes">{day && getClassForDay(day)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;