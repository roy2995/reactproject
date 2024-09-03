import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

const Header = ({ role }) => {
  const renderNavItems = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <li><Link to="/personnel" className="hover:text-blue-500">Personnel</Link></li>
            <li><Link to="/tasks" className="hover:text-blue-500">Tasks</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
          </>
        );
      case 'entreprise':
        return (
          <>
            <li><Link to="/reports" className="hover:text-blue-500">Reports</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
          </>
        );
      case 'user':
        return (
          <>
            <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/create-report" className="hover:text-blue-500">Create Report</Link></li>
            <li><Link to="/view-group" className="hover:text-blue-500">View Group</Link></li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-10 mr-4" />
        <h1 className="text-white text-xl">Hombres de Blanco</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 text-white">
          {renderNavItems()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
