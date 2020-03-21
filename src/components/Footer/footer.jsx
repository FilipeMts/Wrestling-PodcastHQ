import React, { useState } from 'react';
import { Row, Modal, Button } from 'react-bootstrap';
import '../../App.scss';

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className='footer'>
      <p onClick={handleShow}>about</p>      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-warning'>
          <Modal.Title>about</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-warning text-justify'>
          This is a web development project created by <a href='https://filipematos.dev' target='_blank' rel='noopener noreferrer'>Filipe Matos</a>.<br/>
          If you enjoy these podcasts please support <a href='https://www.westwoodone.com' target='_blank' rel='noopener noreferrer'>Westwood One</a>.<br/>
          All rights belong to their respective owners.
          </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
