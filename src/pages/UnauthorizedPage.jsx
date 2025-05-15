import React from 'react';
import './UnauthorizedPage.css'; // Import the CSS file
import { Lock } from 'lucide-react'; // Lucide icon for the lock

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-container">
      <Lock className="unauthorized-icon" />
      <h1 className="unauthorized-text">Unauthorized Access</h1>
      <p className="unauthorized-subtext">You do not have permission to view this page.</p>
    </div>
  );
};

export default UnauthorizedPage;