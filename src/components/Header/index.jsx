import React from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import Logo from '../../images/logo.png';

import './style.css';

function Header() {
  return (
    <header id="header">
      <img className="image" src={Logo} alt="NextLevel"/>
      <BsFillCircleFill size={45} color="#EBF2F5" />
    </header>
  );
}

export default Header;
