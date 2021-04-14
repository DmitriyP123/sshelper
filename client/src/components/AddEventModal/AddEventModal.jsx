import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddEventModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ width: '170px' }} variant="primary" onClick={handleShow}>
        Добавить Ивент
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Опишите новый ивент</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Название ивента</Form.Label>
            <Form.Control type="text" placeholder='"пример названия"' />
            <br />
            <Form.Label>Описание ивента</Form.Label>
            <Form.Control type="text" as="textarea" placeholder='"пример описания"' />
            <br />
            <Row>
              <Col>
                <Form.Label>Дата ивента</Form.Label>
                <Form.Control style={{ width: '150px' }} type="text" placeholder="дата" readOnly />
              </Col>
              <Col>
                <Form.Label>Время</Form.Label>
                <Form.Control style={{ width: '150px' }} as="select">
                  // map
                <option>11:00</option>
                  <option>13:00</option>
                  <option>15:00</option>
                  
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button variant="success" onClick={handleClose}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEventModal;
