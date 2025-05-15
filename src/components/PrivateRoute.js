import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

// expectedRoles is an array: e.g. ['admin'] or ['student', 'lecturer']
const PrivateRoute = ({ children, expectedRoles }) => {
  const { isLoggedIn, role } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (expectedRoles && !expectedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;