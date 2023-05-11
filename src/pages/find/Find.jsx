import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

import logo from '../../images/gyozilla-logo.png';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'

const icon = L.icon({
  iconUrl: logo,
  iconSize: [38, 48], // dimensions de l'image
  iconAnchor: [19, 48], // point d'ancrage de l'image
});

const position = [49.890514, 2.3017172];

const Find = () => {
  return (
    <>
    <Box sx={{ width:"100%", minHeight:"calc(100vh - 71px)", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
      <Typography variant="h7b" color="initial" sx={{ marginBottom:"60px" }}>Positions des restaurants Gyozilla</Typography>
      <MapContainer center={position} zoom={13} style={{ height: "60vh", width: "60%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Gyozilla Amiens<br /> 70 Rue des Jacobins, 80000 Amiens.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
    </>
  );
};

export default Find;