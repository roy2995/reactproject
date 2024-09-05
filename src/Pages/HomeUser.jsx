// src/Pages/HomeUser.jsx
import React, { useState, useEffect } from 'react';
import LocationMap from '../Components/LocationMap';

const HomeUser = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    const [isWithinArea, setIsWithinArea] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                    checkIfWithinArea(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not available");
        }
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
