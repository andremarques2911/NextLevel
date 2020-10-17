import React from 'react';

import './style.css';

function CardItem({ children }) {
  return (
    <div className="cardPanel">
      { children }
    </div>
  );
}

export default CardItem;
