import React from 'react';

import './style.css';

function Button({ onClick, value }) {
  return (
    <button className="button" onClick={ onClick }>
      { value }
    </button>
  );
}

export default Button;
