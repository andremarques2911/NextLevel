import React from 'react';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import TimeLine from '../../components/TimeLine';

import './style.css';

function Career() {
  return (
    <React.Fragment>
      <Header />
      <div className="time-line">
        <div className="time-line-container">
          {
            jobs.map( ( job, key ) => {
              return (
                <React.Fragment key={ key }>
                  <div className="center">
                    <TimeLine job={ job } />
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>

      </div>

    </React.Fragment>
  );
}

export default Career;

const jobs = [
  {
    title: 'Engenheiro de Software',
    dateIn: '17/02/2019',
    level: 'Senior',
    projects: [
      'Doe Vida',
      'A viagem do Pensamento',
      'ONYVA'
    ]
  },
  {
    title: 'Desenvolvedor NodeJS',
    dateIn: '03/01/2018',
    dateOut: '20/01/2019',
    level: 'Pleno',
    projects: [
      'Calculadora de Resultados',
      'Incluitec',
      'Job Quest',
      'Cupertina'
    ]
  },
  {
    title: 'Desenvolvedor Java',
    dateIn: '01/04/2016',
    dateOut: '22/12/2017',
    level: 'Junior',
    projects: [
      'LocalPass',
      'APPOIO'
    ]
  }
]
