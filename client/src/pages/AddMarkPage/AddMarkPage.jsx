import React, { useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import tw from "twin.macro";
import styled from "styled-components";
import Navbar from "components/Navbar/Navbar";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/upload.svg";
import { fetchAddRequests } from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function AddMarkPage() {
  const libraries = ["places"];

  const mapContainerStyle = {
    width: "55vw",
    height: "80vh",
    alignItems: "left",
  };
  
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    // styles:  - возможно поменяем стиль карты
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  const [marker, setMarker] = useState({lat:'', lng:''});
  const [input, setInputs] = useState({title:'',content:''})
  const [center, setCenter] = useState({lat: 59.93848,lng: 30.31248,})
  const onMapClick = (e) => {
    setInputs({
      title:titleInput.current.value,
      content:contentInput.current.value,
    })
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    })
    setCenter({lat:e.latLng.lat(), lng:e.latLng.lng()})
  }

  const history = useHistory()
  const dispatch = useDispatch()
  let latInput = useRef()
  let lngInput = useRef()
  let titleInput = useRef()
  let contentInput = useRef()
  if (loadError) return "ERROR LOADING MAPS";
  if (!isLoaded) return "LOADING...";

  const submitButtonText = "Отправить заявку";
  const SubmitButtonIcon = LoginIcon;

  const Form = tw.form`mx-auto max-w-xs`;
  const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
  const SubmitButton = styled.button`
    ${tw`mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-teal-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
    .icon {
      ${tw`w-6 h-6 -ml-2`}
    }
    .text {
      ${tw`ml-3`}
    }
  `;

  const requestHandler = (e) => {
    e.preventDefault()
    let data = {
      lat: latInput.current.value,
      lng: lngInput.current.value,
      fieldTitle: titleInput.current.value,
      fieldContent: contentInput.current.value,
    }
    dispatch(fetchAddRequests(data))
    history.push('/')
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            onClick={onMapClick}
          >
             {marker.lat && <Marker
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
              />}
          </GoogleMap>
        </div>
        <div style={{ margin: "0 auto", marginTop: "5em" }}>
          <Form onSubmit={requestHandler}>
            <Input type="text" ref={latInput} placeholder="метка 1" value={marker.lat} readOnly />
            <Input type="text" ref={lngInput} placeholder="метка 2" value={marker.lng} readOnly />
            <Input type="text" ref={titleInput} defaultValue={input.title} placeholder="Название поля" />
            <Input type="text" ref={contentInput} defaultValue={input.content} placeholder="Описание поля" />
            <SubmitButton type="submit">
              <SubmitButtonIcon className="icon" />
              <span className="text">{submitButtonText}</span>
            </SubmitButton>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddMarkPage;
