import React, { useState } from "react";
import axios from "axios";
import "./TimetableAdminForm.css";

const TimetableAdminForm = () => {
  const [day, setDay] = useState("");
  const [classes, setClasses] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const classList = classes.split(",").map((c) => c.trim());
    try {
      const res = await axios.post(
        "https://smart-campus-backend-service.onrender.com/api/timetable/createtimetable",
        { day, classes: classList }
      );

      console.log(res.data);
      setDay("");
      setClasses("");
      alert("Timetable entry added successfully!");
    } catch (err) {
      console.error("Failed to add entry:", err);
      alert("Failed to add entry. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="timetable-form">
      <h3>Create Timetable Entry</h3>
      <label>Day:</label>
      <select value={day} onChange={(e) => setDay(e.target.value)} required>
        <option value="">Select a day</option>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <br />
      <label>Classes (comma separated):</label>
      <input
        type="text"
        value={classes}
        onChange={(e) => setClasses(e.target.value)}
        placeholder="e.g. Math, Science"
        required
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default TimetableAdminForm;
