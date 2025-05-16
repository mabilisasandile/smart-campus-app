import React from 'react'
import './AdminPage.css'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-text">Welcome to the Admin Page</h1>
      <p className='admin-subtext'>Here you can manage users, view reports, and perform administrative tasks.</p>
      <h2>Admin Features</h2>
      <ul>
        <li><Link to="/register">User Management</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/timetable-management">Timetable Management</Link></li>
      </ul>
    </div>
  )
}

export default AdminPage