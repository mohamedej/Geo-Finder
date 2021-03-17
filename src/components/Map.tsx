import React from "react";
import "./Styles/Map.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface MapProps {
  lng: string;
  lat: string;
}

// interface MapistaProps {
//   position: LatLngTuple;
// }
// const Mapista: React.FC<MapistaProps> = ({ position }) => {
//   const map = useMapEvent('click', ()=> {
//     map.getCenter(position)
//   });
//   return (
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   );
// };

const Map: React.FC<MapProps> = ({ lng, lat }) => {
  const lang = +lng;
  const lati = +lat;
  console.log(lang, lati);
  const position: LatLngTuple = [lang, lati];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Mapista position={position} /> */}
    </MapContainer>
  );
};

export default Map;
