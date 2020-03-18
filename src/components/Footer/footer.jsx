import React, { useState } from 'react';
import { Row, Modal, Button } from 'react-bootstrap';
import './footer.scss';

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className='footer'>
      <p onClick={handleShow}>About</p>      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>about</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a free web development personal project created by <a href='https://filipematos.dev'>Filipe Matos</a>.<br/>
          If you enjoy these podcasts please visit and support <a href='https://www.westwoodone.com'>Westwood One</a>.<br/>
          All rights belong to their respective owners.
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
