import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Configurar el token de Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXN0cm9ib3lwdHkiLCJhIjoiY20wb2I0OHF3MDdvdDJscHNuN2FpcmdrMSJ9.CFQE8lSCfsDJfwTXC13Ohw';

const LocationMap = ({ lat, lng }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (lat && lng && mapContainerRef.current) {
      // Inicializar el mapa de Mapbox
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v9', // Estilo del mapa
        center: [lng, lat], // Centrar en la ubicación del usuario
        zoom: 15,
      });

      // Colocar un marcador en la ubicación del usuario
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

      return () => map.remove(); // Limpiar el mapa al desmontar el componente
    }
  }, [lat, lng]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '200px', height: '200px', borderRadius: '10px', border: '2px solid #000' }}
    ></div>
  );
};

export default LocationMap;
