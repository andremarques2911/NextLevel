import React from 'react';

import { BiX, BiBriefcaseAlt, BiLineChart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import './style.css';

function SideBar({ showSideBar, setShowSideBar }) {
  return (
    <div className="side-bar">
      <div className={showSideBar ? "side-bar-opened" : "side-bar-closed"}>
        <div className="close-button" >
          <BiX size={ 45 } color="#000" className="close-icon" onClick={ _=> setShowSideBar(false) } />
        </div>
        <Link to="/" className="menu-item">
          <BiBriefcaseAlt />
          <span className="title">Vagas</span>
        </Link>

        <Link to="/career" className="menu-item">
          <BiLineChart />
          <span className="title">Carreira</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
