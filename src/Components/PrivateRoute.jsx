import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verificamos si el usuario está autenticado

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
