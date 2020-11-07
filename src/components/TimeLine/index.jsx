import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import CardItem from '../CardItem';
import Modal from '../../components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function TimeLine(props) {
  const [ modalShow, setModalShow ] = useState(false);

  const { title, level, dateIn, dateOut, projects } = props.job;

  const openModal = _=> {
    setModalShow( true );
  }

  return (
    <div className="space">
      <div className="date">
        <div className="divide line-right">
          &nbsp;
        </div>
        <div className="divide">
          <p className="align-left">{ dateOut ? dateOut : dateIn ? "Atual" : '' }</p>
        </div>
      </div>

      <CardItem hover={ false }>
        <span>{ title }</span>
        <span>{ level }</span>
        <Button onClick={ _=> openModal() }>
          Ver mais
        </Button>
      </CardItem>

      <div className="date">
        <div className="divide line-right">
          <p className="align-right">{ dateIn ? dateIn : '' }</p>
        </div>
        <div className="divide">
          &nbsp;
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        job={props.job}
      >
        <span className="title">Projetos Participados:</span>
        {
            projects &&
            projects.map( ( project, key ) => {
              return (
                <ListGroup key={ key }>
                  <ListGroup.Item className="list-item">{ project }</ListGroup.Item>
                </ListGroup>
              )
            })
          }
      </Modal>

    </div>
  );
}

export default TimeLine;
