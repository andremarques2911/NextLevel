import React, { useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
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
        <img className="image" src={ Logo } alt="NextLevel" onClick={ openSideBar }/>
        <BsFillCircleFill size={ 45 } color="#EBF2F5" />
      </header>
    </div>
  );
}

export default Header;
