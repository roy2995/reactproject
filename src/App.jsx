import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Dashboard from './Pages/Dashboard';
import HomeUser from './Pages/HomeUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homeUser" element={<HomeUser />} />
      </Routes>
    </Router>
  );
}

export default App;