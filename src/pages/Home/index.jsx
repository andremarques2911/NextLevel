import React, { useState } from 'react';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import ModalVacancy from '../../components/ModalVacancy';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

function Home() {
  const [ modalShow, setModalShow ] = useState(false);
  const [ vacancy, setVacancy ] = useState({});
  const openModal = vacancy => {
    setModalShow( true );
    setVacancy( vacancy );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <div className="area">
          {
            vacancyGroupings.map(area => {
              return (
                <React.Fragment>
                  <span className="areaTitle">{area.area}</span>
                  <div className="cardContainer">
                    {
                      area.vacancies.map( ( vacancy, key ) => {
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
                </React.Fragment>
              )
            })
          }
        </div>
        <ModalVacancy
          show={modalShow}
          onHide={() => setModalShow(false)}
          vacancy={vacancy}
        />
      </main>
    </React.Fragment>
  );
}

export default Home;


let vacancyGroupings = [
  {
    area: "Tecnologia da Informação",
    vacancies: [
      {
        title: "Desenvolvedor Java",
        level: "Pleno",
        experience: "2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "Java",
            have: true
          },
          {
            description: "Angular",
            have: false
          }
        ]
      },
      {
        title: "Desenvolvedor PHP",
        level: "Senior",
        experience: "5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "NodeJS",
            have: false
          },
          {
            description: "ReactJS",
            have: false
          }
        ]
      },
      {
        title: "Desenvolvedor Node",
        level: "Junior",
        experience: "0-1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "NodeJS",
            have: false
          },
          {
            description: "Oracle",
            have: true
          }
        ]
      },
      {
        title: "Desenvolvedor Flutter",
        level: "Sênior",
        experience: "5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "Experiência com Flutter",
            have: false
          }
        ]
      },
      {
        title: "Engenheiro de Software",
        level: "Pleno",
        experience: "2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "Tempo na área: 1-4 anos",
            have: false
          },
          {
            description: "Experiência em sugerir soluções e arquiteturas para projetos",
            have: true
          },
          {
            description: "Conhecimento em Spring e React",
            have: true
          }
        ]
      }
    ]
  },
  {
    area: "Recursos Humanos",
    vacancies: [
      {
        title: "Tech Recruiter",
        level: "Pleno",
        experience: "2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        requirements: [
          {
            description: "Recrutamento e seleção",
            have: true
          },
          {
            description: "Pscicologia",
            have: false
          }
        ]
      },
    ]
  }


];
