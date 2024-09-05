import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import LocationMap from '../Components/LocationMap';

const HomeUser = () => {
  const [attendanceToday, setAttendanceToday] = useState(false);
  const [attendance, setAttendance] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);  // Agregando estado para manejar errores
  const [position, setPosition] = useState(null);  // Para almacenar la posición del usuario
  const [isWithinArea, setIsWithinArea] = useState(false);  // Para verificar si está dentro del área

  const userName = 'Usuario';
  const userId = 1;
  const dateTime = new Date().toLocaleString();

  const checkAttendanceForToday = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/attendance/today/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setAttendanceToday(data.attendanceExists);
    } catch (error) {
      setError('Error al verificar la asistencia de hoy');
      console.error('Error al verificar la asistencia de hoy:', error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lon: longitude });
          setLocation({ lat: latitude, lng: longitude });
          checkIfWithinArea(latitude, longitude);
        },
        (error) => {
          setError('Error obteniendo la geolocalización');
          console.error('Error obteniendo la geolocalización:', error);
        }
      );
    } else {
      setError('Geolocalización no es soportada por este navegador.');
    }
  };

  useEffect(() => {
    checkAttendanceForToday();
    getLocation();
  }, []);

  const checkIfWithinArea = (userLat, userLon) => {
    const topLeft = { lat: 8.995831, lon: -79.524488 };
    const bottomRight = { lat: 8.993890, lon: -79.521902 };

    if (
      userLat <= topLeft.lat && userLat >= bottomRight.lat &&
      userLon >= topLeft.lon && userLon <= bottomRight.lon
    ) {
      setIsWithinArea(true);
    } else {
      setIsWithinArea(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center" style={{ width: '100%', maxWidth: '1200px' }}>
        {error && <p className="text-red-500">{error}</p>}
        {position ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Bienvenido</h2>
            <p>Tu ubicación actual es:</p>
            <p>Latitud: {position.lat}</p>
            <p>Longitud: {position.lon}</p>
          </div>
        ) : (
          <p>Obteniendo tu ubicación...</p>
        )}

        {/* LocationMap Component */}
        {position && (
          <div style={{ width: '100%', height: '400px' }}>
            <LocationMap position={position} />
          </div>
        )}

        {isWithinArea ? (
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Empezar Turno
          </button>
        ) : (
          <p className="text-red-500 mt-4">No estás dentro del área permitida para iniciar el turno.</p>
        )}
      </div>
    </div>
  );
};

export default HomeUser;
