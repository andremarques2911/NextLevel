import React from 'react';

import './style.css';

function CardItem({ children, hover=true }) {

  const classes = `cardPanel ${ hover ? 'cardPanelHover' : '' }`;

  return (
    <div className={ classes }>
      { children }
    </div>
  );
}

export default CardItem;
