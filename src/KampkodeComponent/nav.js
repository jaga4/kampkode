import React, { useState } from 'react';
import './nav.css';

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
    setBtnClicked(false); 
  };

  const toggleButton = () => {
    setBtnClicked(!btnClicked);
  };

  return (
    <div className="body">
      <nav className={`navbar ${navActive ? 'nav-active' : ''}`}>
        <div className="logo"><img src="logo.png" alt="logo" /></div>
        <div className="nav-center">
          <ul className={`nav-links ${navActive ? 'nav-active' : 'hidden'}`}>
            <li><a href="#home">Home</a></li>
            <li>
              <a href="#about">Products▼</a>
              <ul className="drop-down">
                <li><a href="#">System Software</a></li>
                <li><a href="#">Application Software</a></li>
                <li><a href="#">Cloud Software</a></li>
              </ul>
            </li>
            <li>
              <a href="#services">Resources▼</a>
              <ul className="drop-down">
                <li><a href="#">Virtual Server</a></li>
                <li><a href="#">Physical Server</a></li>
                <li><a href="#">Network Device</a></li>
              </ul>
            </li>
            <li><a href="#contact">Pricing</a></li>
          </ul>

          <div className={`buttons ${navActive ? 'nav-active' : 'hidden'}`}>
            <button className={`btn ${btnClicked ? 'clicked' : ''}`} onClick={toggleButton}>Login</button>
            <button className={`btn ${btnClicked ? '' : 'clicked'}`} onClick={toggleButton}>Sign Up</button>
          </div>
        </div>

        <div className={`burger ${navActive ? 'toggle' : ''}`}  onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
