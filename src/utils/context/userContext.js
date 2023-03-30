import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
      setIsLogged(true);
    }
  }, [user]);

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUser(decoded);
    setIsLogged(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLogged(false);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
