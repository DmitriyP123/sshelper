import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAcceptRequests } from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch } from 'react-redux'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function RequestModal({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const latInput = useRef()
  const lngInput = useRef()
  const fieldTitleInput = useRef()
  const fieldContentInput = useRef()
  const markInfoInput = useRef()
  const mapContainerStyle = {
    width: "25vw",
    height: "35vh",
    alignItems: "center",
  };
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    // styles:  - возможно поменяем стиль карты
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  
  const [marker, setMarker] = useState({ lat: "", lng: "" });
  const [center, setCenter] = useState({lat: 59.93848,lng: 30.31248,})
  const dispatch = useDispatch()
  const onMapClick = (e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    setCenter({lat:e.latLng.lat(), lng:e.latLng.lng()})
  };

  const addFieldMarkHandler = () => {
    setShow(false)
    dispatch(fetchAcceptRequests(data._id, fieldTitleInput.current.value, 
    fieldContentInput.current.value, latInput.current.value, lngInput.current.value, markInfoInput.current.value))
  };
  useEffect(() => {
    setMarker({ lat: data.lat, lng: data.lng });
  }, []);
  return (
    <>
      <Button style={{ width: "170px" }} variant="success" onClick={handleShow}>
        Принять заявку
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Форма принятия заявки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>latitude</Form.Label>
            <Form.Control type="text" value={marker.lat} ref = {latInput} disabled />
            <Form.Label>longtitude</Form.Label>
            <Form.Control type="text" value={marker.lng} ref = {lngInput} disabled />
            <Form.Label>Описание метки</Form.Label>
            <Form.Control type="text" ref ={markInfoInput} placeholder="описание метки на карте" />
            <br />
            <Form.Label>Название поля</Form.Label>
            <Form.Control type="text" ref ={fieldTitleInput} defaultValue={data.fieldTitle} />
            <Form.Label>Описание поля</Form.Label>
            <Form.Control type="text" ref ={fieldContentInput} defaultValue={data.fieldContent} />
            <br />
            <Row></Row>
          </Form.Group>
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
                  {marker.lat && (
                    <Marker
                      position={{
                        lat: marker.lat,
                        lng: marker.lng,
                      }}
                    />
                  )}
                </GoogleMap>
              </div>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button variant="success" onClick={addFieldMarkHandler}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestModal;
