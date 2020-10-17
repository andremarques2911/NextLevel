import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './style.css';

function ModalVacancy(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { props.vaga.title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Descrição da vaga</h5>
        <div className="vaga-dados">
          <span>Área:&nbsp;</span><p>{props.vaga.area}</p>
          <span>Nível:&nbsp;</span><p>{props.vaga.level}</p>
          <span>Experiência:&nbsp;</span><p>{props.vaga.experience}</p>
          <span>Descrição:&nbsp;</span>
          <p>{props.vaga.description}</p>
          <ul>{props.vaga.requirements}</ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalVacancy;
