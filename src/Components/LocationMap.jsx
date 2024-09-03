// src/Components/LocationMap.jsx
import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const LocationMap = ({ position }) => {
    return (
        <div style={{ height: '400px', width: '400px', overflow: 'hidden', margin: '0 auto' }}>
            <Map
                initialViewState={{
                    longitude: position.lon,
                    latitude: position.lat,
                    zoom: 17,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="https://api.maptiler.com/maps/8f966beb-a74e-48ce-b7aa-b5bf56d4a1e9/style.json?key=qsCsJF20SfsXeSlLuOGk"

            >
                {/* Marcar la ubicación del usuario */}
                <Marker longitude={position.lon} latitude={position.lat} color="red" />
            </Map>
        </div>
    );
};

export default LocationMap;
