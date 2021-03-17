import React, { useState } from "react";
import "../assets/styles/map.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface MapProps {
  lng: string;
  lat: string;
}

interface MarkerProps {
  position: [a: number, b: number];
}

const LocationMarker: React.FC<MarkerProps> = ({ position }) => {
  const map = useMap();
  map.flyTo(position);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC<MapProps> = ({ lng, lat }) => {
  const lang = +lng;
  const lati = +lat;
  console.log(lang, lati);
  const position: LatLngTuple = [lati, lang];

  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} />
    </MapContainer>
  );
};

export default Map;
