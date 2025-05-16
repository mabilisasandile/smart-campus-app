import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedRole = localStorage.getItem('role');
    setIsLoggedIn(!!token);
    setRole(savedRole);
  }, []);

  const login = (userRole, user_id, name, email) => {
    setIsLoggedIn(true);
    setRole(userRole);
    setUserId(user_id);
    setUserName(name);
    setUserEmail(email);
    localStorage.setItem('role', userRole);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout, userId, userName, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};