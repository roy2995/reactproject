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

    const checkIfWithinArea = (userLat, userLon) => {
        const topLeft = { lat: 8.995831, lon: -79.524488};
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

                {/* Here is the LocationMap */}
                {position && (
                    <div style={{ width: '100%', height: '400px' }}>
                        <LocationMap position={position} />
                    </div>
                )}
                 {isWithinArea ? (
                            <button
                                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
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
