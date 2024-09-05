// src/Components/LocationMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ position }) => {
    return (
        <div style={{ height: '400px', width: '80%', overflow: 'hidden', margin: '0 auto' }}>
            <MapContainer
                center={[position.lat, position.lon]} // Coordinates for the map center
                zoom={17} // Zoom level
                style={{ width: '100%', height: '100%' }}
            >
                {/* Use the correct URL format with the new access token */}
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYXN0cm9ib3lwdHkiLCJhIjoiY20wcG9iZjhyMDM0ajJrcHNiODhrd2o5aSJ9.ebi2UZbY-odrbT1ZVIIcNA"
                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                    tileSize={512}
                    zoomOffset={-1}
                />

                {/* Add a marker at the user's location */}
                <Marker position={[position.lat, position.lon]} />
            </MapContainer>
        </div>
    );
};

export default LocationMap;