import React, { useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../images/logo.png';
import SideBar from '../../components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

function Header() {
  const [ showSideBar, setShowSideBar ] = useState(false);
  const openSideBar = _=> {
    setShowSideBar(!showSideBar);
  }
  return (
    <div>
      <SideBar showSideBar={ showSideBar } setShowSideBar={ setShowSideBar } />
      <header id="header">
          <BiMenu size={40} className="menu-icon" onClick={ openSideBar } />
          <img className="image" src={ Logo } alt="NextLevel" />
      </header>
    </div>
  );
}

export default Header;
