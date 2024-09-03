import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login';
import Dashboard from './Pages/Dashboard';
import HomeUser from './Pages/HomeUser';

// Definición del componente PrivateRoute
function PrivateRoute({ children, allowedRoles }) {
    const role = localStorage.getItem('role');

    return allowedRoles.includes(role) ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute allowedRoles={['admin']}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/homeUser" element={
          <PrivateRoute allowedRoles={['user']}>
            <HomeUser />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
