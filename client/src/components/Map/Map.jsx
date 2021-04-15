import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import tw from "twin.macro";
import styled from "styled-components";
import './Map.css';
import Navbar from 'components/Navbar/Navbar';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useHistory } from 'react-router';
import { fetchInitMarkers } from '../../redux/reduxThunk/asyncFuncs';
import { Link } from 'react-router-dom';


const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '95vh'
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  // styles:  - возможно поменяем стиль карты
};

const center = {
  lat: 59.938480,
  lng: 30.312480
};


function Map(props) {

  const dispatch = useDispatch();
  const { markers } = useSelector(state => state.map);

  useEffect(() => {
    dispatch(fetchInitMarkers());
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = useState(null);

  // const onMapClick = useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     }
  //   ]);
  // }, []);

  console.log(selected);

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    console.log(mapRef.current)
  }, []);

  if (loadError) return "ERROR LOADING MAPS";
  if (!isLoaded) return "LOADING...";


  return (
    <Container>
      <Locate panTo={panTo} />
      <HeroContainer>
        <Content>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            // onClick={onMapClick}
            onLoad={onMapLoad}>
            {markers.map(marker => <Marker key={marker._id}
              // key = .id ?
              // UUID ?
              position={{
                lat: marker.lat,
                lng: marker.lng
              }}
              icon={{
                url: '/images/basketball.svg', // ???
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              onClick={() => {
                setSelected((selected) => selected = { marker });
              }} />)}

            {selected ? (
              <InfoWindow position={{ lat: selected.marker.lat, lng: selected.marker.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  {/* <h2>{selected.marker.lat}</h2> */}
                  <p>{selected.marker.info}</p>
                  {/* <p>Добавлено: {formatRelative(selected.marker.time, new Date())}</p> */}
                  {/* <button onClick={showFieldInfo}>Подробнее</button> */}
                  <Link to={`/field/${selected.marker.field}`}>Подробнее</Link>
                </div>
              </InfoWindow>
            ) : null}
            {/* <Search panTo={panTo} /> */}
          </GoogleMap>
        </Content>
      </HeroContainer>
    </Container >
  );
};

function Locate({ panTo }) {
  return (<button
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => null
      );
    }}>
    KARTINKA
  </button>)
};

export default Map;
