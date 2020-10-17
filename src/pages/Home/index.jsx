import React from 'react';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import Button from '../../components/Button';

import './style.css';

function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="area">
          <span className="areaTitle">AREA</span>
          <div className="cardContainer">
            {
              vagas.map(vaga => {
                return (
                  <React.Fragment>

                      <CardItem>
                        <p>{vaga.title}</p>
                        <Button
                          onClick={ _=> alert("VER MAIS") }
                          value="Ver mais"
                        />
                      </CardItem>

                  </React.Fragment>
              )})
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;


let vagas = [
  {
    title: "Desenvolvedor Java",
    level: "Pleno",
    experiience: "2",
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "Java",
      "Amgular"
    ]
  },
  {
    title: "Desenvolvedor PHP",
    level: "Senior",
    experiience: "5",
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Tecnologia da Informação",
    requirements: [
      "NodeJS",
      "ReactJS"
    ]
  },
  {
    title: "Tech Recruiter",
    level: "Pleno",
    experiience: "5",
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    area: "Recursos Humanos",
    requirements: [
      "Recrutamento e seleção",
      "Pscicologia"
    ]
  }
];
