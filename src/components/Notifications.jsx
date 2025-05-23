import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Notifications.css";
import { AuthContext } from "./AuthContext";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const { isLoggedIn, role, userName, userEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      navigate("/unauthorized");
    }

    // Fetch notifications from the backend
    axios
      .get(
        "https://smart-campus-backend-service.onrender.com/api/notification/fetchnotifications"
      )
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error(err));
  }, [isLoggedIn, navigate]);


  const handleAnnouncementChange = (e) => {
    setNewAnnouncement(e.target.value);
  };

  // Function to post a new announcement
  const postAnnouncement = async () => {
    if (!newAnnouncement.trim()) return;

    try {
      await axios.post(
        "https://smart-campus-backend-service.onrender.com/api/notification/createnotification",
        {
          message: newAnnouncement,
          postedBy: {
            name: userName,
            email: userEmail,
          },
        }
      );

      alert("Announcement posted successfully!");
      setNewAnnouncement("");
    } catch (error) {
      console.error("Error posting announcement:", error);
      alert("Failed to post announcement. Please try again.");
    }
  };

  return (
    <div className="notification-container">
      {role !== "student" && (
        <div>
          <h2>Post an Announcement</h2>
          <div className="notification-form">
            <textarea
              rows="4"
              type="text"
              placeholder="New Announcement"
              value={newAnnouncement}
              onChange={handleAnnouncementChange}
            />
            <button onClick={postAnnouncement}>Post</button>
          </div>
        </div>
      )}
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((note) => (
          <div className="card" key={note._id}>
            <p className="message">{note.message}</p>
            <div className="meta">
              <span>
                By: {note.postedBy.name} ({note.postedBy.email})
              </span>
              <span>{new Date(note.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="no-notifications">Loading notifications...</p>
      )}
    </div>
  );
};

export default Notifications;
