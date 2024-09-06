import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import HomeUser from './Pages/HomeUser';
import Header from './Components/Header';
import CleaningService from './Pages/CleaningService';
import PrivateRoute from './Components/PrivateRoute';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const role = localStorage.getItem('role');

  return (
    <Router>
      {/* Mostrar el Header fuera del Routes */}
      {window.location.pathname !== '/login' && role && <Header role={role} />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rutas privadas */}
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
        <Route path="/cleaningService" element={
          <PrivateRoute allowedRoles={['user']}>
            <CleaningService />  {/* Ruta para Cleaning Service */}
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
