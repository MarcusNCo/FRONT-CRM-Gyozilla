import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import './Find.css'
import { getAllFranchises } from "../../utils/api-call/franchise";
import haversine from "haversine";

import logo from "../../images/gyozilla-logo.png";
import marker from "../../images/marker.png";
import { Box, styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const icon = L.icon({
  iconUrl: logo,
  iconSize: [38, 48],
});

const userIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [90, 70],
});

const Find = () => {
  const [franchises, setFranchises] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [closestFranchise, setClosestFranchise] = useState(null);
  const [error, setError] = useState(null);
  const [searching, setSearching] = useState(false);
  const [mapCenter, setMapCenter] = useState([49.8929565, 2.2953686]);
  const mapRef = useRef();

  const MapContainerStyled = styled(MapContainer)(({ theme }) => ({
    height: "60vh",
    minWidth: "60%",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));

  const startSearch = () => {
    setSearching(true);
  };

  useEffect(() => {
    getAllFranchises()
      .then((res) => {
        setFranchises(res.data);
        setError(null);
      })
      .catch((error) => {
        setFranchises([]);
        setError(error);
      });
  }, []);

  useEffect(() => {
    let watcherId = null;

    if (searching) {
      const successCallback = (position) => {
        const newPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserPosition(newPosition);
        setMapCenter([newPosition.latitude, newPosition.longitude]);
        setSearching(false);
      };

      const errorCallback = (error) => {
        console.error("Error obtaining user position", error);
        setSearching(false);
      };

      watcherId = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback
      );
    }

    return () => {
      if (watcherId !== null) {
        navigator.geolocation.clearWatch(watcherId);
      }
    };
  }, [searching]);

  useEffect(() => {
    if (userPosition && franchises) {
      let closest = franchises[0];
      let closestDistance = getDistance(userPosition, franchises[0]);

      for (let i = 1; i < franchises.length; i++) {
        let distance = getDistance(userPosition, franchises[i]);
        if (distance < closestDistance) {
          closest = franchises[i];
          closestDistance = distance;
        }
      }

      setClosestFranchise(closest);
    }
  }, [userPosition, franchises]);

  const getDistance = (position1, position2) => {
    if (!position2.geography) {
      return 0;
    }

    const start = {
      latitude: position1.latitude,
      longitude: position1.longitude,
    };

    const end = {
      latitude: parseFloat(position2.geography.split(",")[0]),
      longitude: parseFloat(position2.geography.split(",")[1]),
    };

    return haversine(start, end);
  };

  const handleMapCreated = (map) => {
    mapRef.current = map;
  };

useEffect(() => {
  if (closestFranchise && userPosition) {
    const franchisePosition = closestFranchise.geography.split(",").map(parseFloat);
    const distance = getDistance(userPosition, franchisePosition);

    let zoomLevel;
    if (distance < 1) zoomLevel = 14;
    else if (distance < 5) zoomLevel = 13;
    else if (distance < 10) zoomLevel = 12;
    else zoomLevel = 11;

    if (mapRef.current) {
      mapRef.current.setView(mapCenter, zoomLevel);
    }
  }
}, [closestFranchise, userPosition]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 71px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="hboxb"
          color="initial"
          sx={{ marginBottom: "30px" }}
        >
          Trouver les restaurants Gyozilla
        </Typography>
        <Button
          variant="text"
          color="primary"
          onClick={startSearch}
          sx={{ marginBottom: "30px" }}
        >
          Ma position
        </Button>
        <MapContainerStyled
          center={mapCenter}
          whenCreated={handleMapCreated}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {userPosition && (
            <Marker
              position={[userPosition.latitude, userPosition.longitude]}
              icon={userIcon}
            >
              <Popup>Votre position</Popup>
            </Marker>
          )}
          {franchises.map((franchise, index) => {
            if (!franchise.geography) {
              console.error("Geography is null for franchise", franchise);
              return null;
            }

            const [latitude, longitude] = franchise.geography
              .split(",")
              .map(parseFloat);
            return (
              <Marker key={index} position={[latitude, longitude]} icon={icon}>
                <Popup>
                  {franchise.name}
                  <br /> {franchise.address}
                </Popup>
              </Marker>
            );
          })}
          {closestFranchise && (
            <Marker
              position={closestFranchise.geography.split(",").map(parseFloat)}
              anchor={closestFranchise.geography.split(",").map(parseFloat)}
              icon={icon}
            >
              <Popup>
                Restaurant le plus proche : {closestFranchise.name}
                <br /> {closestFranchise.address}
              </Popup>
            </Marker>
          )}
        </MapContainerStyled>
      </Box>
    </>
  );
};

export default Find;
