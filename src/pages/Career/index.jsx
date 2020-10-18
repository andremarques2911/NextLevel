import React from 'react';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import TimeLineSpace from '../../components/TimeLineSpace';

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
                    <TimeLineSpace dateIn={ job.dateIn } dateOut={ job.dateOut } />
                  </div>
                  <div className="center">
                    <CardItem hover={ false }>
                      <span>{ job.title }</span>
                      <p></p>
                    </CardItem>
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
    dateIn: "17/02/2019"
  },
  {
    title: 'Desenvolvedor NodeJS',
    dateIn: "03/01/2018",
    dateOut: "20/01/2019"
  },
  {
    title: 'Desenvolvedor Java',
    dateIn: "01/04/2016",
    dateOut: "22/12/2017"
  }
]
