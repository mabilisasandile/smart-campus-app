import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('https://smart-campus-backend-service.onrender.com/api/notification/fetchnotifications')
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      {
        notifications.length > 0 ? (
          notifications.map((note) => (
            <div className="card" key={note._id}>
              <p className="message">{note.message}</p>
              <div className="meta">
                <span>By: {note.postedBy.name} ({note.postedBy.email})</span>
                <span>{new Date(note.createdAt).toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-notifications">No notifications available.</p>
        )
      }
    </div>
  );
};

export default Notifications;