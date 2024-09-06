import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

const Header = ({ role }) => {
  const renderNavItems = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <li><Link to="/personnel" className="hover:text-blue-500">Personal</Link></li>
            <li><Link to="/tasks" className="hover:text-blue-500">Reportes</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-500">Panel de control</Link></li>
          </>
        );
      case 'user':
        return (
          <>
            <li><Link to="/homeUser" className="hover:text-blue-500">Inicio</Link></li>
            <li><Link to="/cleaningService" className="hover:text-blue-500">Crear Reporte</Link></li>
            <li><Link to="/view-group" className="hover:text-blue-500">Ver Grupo</Link></li>
            <li><Link to="/create-report" className="hover:text-blue-500">Salir</Link></li> {/* Pestaña agregada */}
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
