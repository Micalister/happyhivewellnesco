import React from 'react';
import '.././App.css';
import Logo from '.././assets/logo.svg';

function Header() {
  return (
    <div className="background-header" id="home">
            <h1 className="header-title">Habit Hive Wellness Co.</h1>
            <img src={Logo} alt="Happy Hive Wellness Co. Logo" className="logo header-logo"></img>
            <div>
                <nav className="nav-bar">
                    <ul className="unordered-nav-li">
                        <li><a className="nav-list-item" href="#home" id="home">HOME</a></li>
                        <li><a className="nav-list-item" href="#about-me">ABOUT ME</a></li>
                        <li><a className="nav-list-item" href="#plans">PLANS</a></li>
                        <li><a className="nav-list-item" href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        <div className="background-hero"> </div>
    </div>
  );
}

export default Header;