import React from 'react';

import './style.css';

function TimeLineSpace({ dateIn, dateOut }) {
  return (
    <div className="space">
      <div className="date">
        <div className="divide line-right">
          &nbsp;
        </div>
        <div className="divide">
          <p className="align-left">{ dateOut ? dateOut : '' }</p>
        </div>
      </div>
      <div className="date">
        <div className="divide line-right">
          <p className="align-right">{ dateIn ? !dateOut ? "Atual" : dateIn : '' }</p>
        </div>
        <div className="divide">
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default TimeLineSpace;
