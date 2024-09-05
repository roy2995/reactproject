import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import LocationMap from '../Components/LocationMap';  // Importar el componente del mapa

const HomeUser = () => {
  const [attendanceToday, setAttendanceToday] = useState(false);  // Para verificar si ya tiene asistencia hoy
  const [attendance, setAttendance] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });

  const userName = 'Usuario';  // Cambia esto según los datos reales de tu aplicación
  const userId = 1;  // ID real del usuario, debería obtenerse de la autenticación o estado global
  const dateTime = new Date().toLocaleString();

  // Función para verificar si el usuario ya tiene un registro de asistencia hoy
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
      console.error('Error al verificar la asistencia de hoy:', error);
    }
  };

  // Función para obtener la ubicación del usuario
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error obteniendo la geolocalización:', error);
        }
      );
    } else {
      console.error('Geolocalización no es soportada por este navegador.');
    }
  };

  // Efecto para obtener la ubicación y verificar asistencia al cargar el componente
  useEffect(() => {
    checkAttendanceForToday();  // Verificar si ya tiene asistencia hoy
    getLocation();  // Obtener geolocalización
  }, []);

  // Función para hacer el check-in
  const handleCheckIn = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          user_id: userId,  // Reemplaza con el ID real del usuario
          check_in: new Date().toISOString(),
          location,
        }),
      });
      const data = await response.json();
      setAttendance(data);  // Almacenar la asistencia en el estado
      console.log('Check-in exitoso:', data);
    } catch (error) {
      console.error('Error al hacer el check-in:', error);
    }
  };

  // Función para hacer el check-out
  const handleCheckOut = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/attendance/${attendance.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          check_out: new Date().toISOString(),
        }),
      });
      const data = await response.json();
      setCheckOutTime(data.check_out);
      console.log('Check-out exitoso:', data);
    } catch (error) {
      console.error('Error al hacer el check-out:', error);
    }
  };

  return (
    <div>
      <Header role="user" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Bienvenido, {userName}</h2>
        <p>{dateTime}</p>

        {/* Verificar si ya tiene asistencia hoy y mostrar el mapa solo si no tiene */}
        {!attendanceToday ? (
          <>
            {location.lat && location.lng ? (
              <LocationMap lat={location.lat} lng={location.lng} />
            ) : (
              <p>Obteniendo geolocalización...</p>
            )}

            {/* Botón para hacer check-in */}
            <button onClick={handleCheckIn} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
              Empezar Turno
            </button>
          </>
        ) : (
          <p>Ya has registrado tu asistencia hoy.</p>
        )}

        {/* Botón para hacer check-out */}
        {attendance && (
          <button onClick={handleCheckOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Salir del Turno
          </button>
        )}

        {/* Mostrar información del check-out si existe */}
        {checkOutTime && <p>Has terminado el turno a las: {checkOutTime}</p>}
      </div>
    </div>
  );
};

export default HomeUser;
