import React, { useState } from 'react';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import ModalVacancy from '../../components/ModalVacancy';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

function Home() {
  const [ modalShow, setModalShow ] = React.useState(false);
  const [ vacancy, setVacancy ] = React.useState({});
  const openModal = vacancy => {
    setModalShow( true );
    setVacancy( vacancy );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <div className="area">
          <span className="areaTitle">ÁREA</span>
          <div className="cardContainer">
            {
              vacancies.map( ( vacancy, key ) => {
                return (
                  <React.Fragment key={ key }>
                      <CardItem>
                        <p>{vacancy.title}</p>
                        <Button onClick={ _=> openModal(vacancy) }>
                          Ver mais
                        </Button>
                      </CardItem>
                  </React.Fragment>
              )})
            }
          </div>
        </div>
        <ModalVacancy
          show={modalShow}
          onHide={() => setModalShow(false)}
          vaga={vacancy}
        />
      </main>
    </React.Fragment>
  );
}

export default Home;


let vacancies = [
  {
    title: "Desenvolvedor Java",
    level: "Pleno",
    experience: "2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "Java",
      "Angular"
    ]
  },
  {
    title: "Desenvolvedor PHP",
    level: "Senior",
    experience: "5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "NodeJS",
      "ReactJS"
    ]
  },
  {
    title: "Tech Recruiter",
    level: "Pleno",
    experience: "2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Recursos Humanos",
    requirements: [
      "Recrutamento e seleção",
      "Pscicologia"
    ]
  },
  {
    title: "Desenvolvedor Node",
    level: "Junior",
    experience: "0-1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "Node",
      "Oracle"
    ]
  },
  {
    title: "Desenvolvedor Flutter",
    level: "Sênior",
    experience: "5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "Experiência com Flutter",
    ]
  },
  {
    title: "Engenheiro de Software",
    level: "Pleno",
    experience: "2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "Tempo na área: 1-4 anos",
      "Experiência em sugerir soluções e arquiteturas para projetos",
      "Conhecimento em Spring e React"
    ]
  } 
];
