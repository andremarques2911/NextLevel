import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import './style.css';

function CustomModal(props) {
  const { children } = props;
  const { title, dateIn, dateOut } = props.job;
  const abreTeste = _=> {
    alert("ABRE O TESTE");
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { children }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ props.onHide }>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
