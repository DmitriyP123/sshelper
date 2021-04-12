import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import tw from "twin.macro";
import styled from "styled-components";
import './Map.css';
import Navbar from 'components/Navbar/Navbar';

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '91vh'
};

const center = {
  lat: 59.938480,
  lng: 30.312480
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  // styles:  - возможно поменяем стиль карты
};

function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);

  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      }
    ]);
    console.log(markers);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const showFieldInfo = () => {
    console.log(123);
  }

  if (loadError) return "ERROR LOADING MAPS";
  if (!isLoaded) return "LOADING...";


  return (
    <Container>
      <HeroContainer>
        <Navbar />
        <Content>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}>
            {markers.map(marker => <Marker key={marker.time.toISOString()}
              // UUID ?
              position={{
                lat: marker.lat,
                lng: marker.lng
              }}
              onClick={() => {
                setSelected(marker);
              }} />)}

            {selected ? (
              <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
                <div>
                  <h2>FieldName</h2>
                  <p>Info</p>
                  <p>Добавлено: {formatRelative(selected.time, new Date())}</p>
                  <button onClick={showFieldInfo}>Подробнее</button>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default Map;
