import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './home.svg';

function Navbar() {
  return (
    <nav className="navbar">
     
        <img src={Logo} alt="Logo" className="navbar-logo"/>
        <h1 className="navbar-title">Content Eraa</h1>
      
    </nav>
  );
}

export default Navbar;
