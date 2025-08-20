import React, { useState } from 'react';
import '.././App.css';
/* SVG assets */
import Logo from '.././assets/logo.svg';
import Hero from '.././assets/hero.svg';
import Bubble1 from '.././assets/chat-bubble1.svg';
import HeroBee from '.././assets/HeroBee.svg';
import Arrow from '.././assets/Arrow.svg';

/* Components */
import Button from './Button.js';
import HeroTypeWritter from './HeroTypeWritter.js';

function Header() {

    const [isActive, setIsActive] = useState(false);

    /* onClick Statements */
    const handleClick1 = () => {
        setIsActive(prevState => !prevState); // Toggle the state immediately
    setTimeout(() => {
        setIsActive(prevState => !prevState); // Toggle it back after 1 second
    }, 1000);
    };

  return (
    <div className="background-header" id="home">
            {/*Header and Logo*/}
            <h1 className="header-title">Habit Hive Wellness Co.</h1>
            <img src={Logo} alt="Happy Hive Wellness Co. Logo" className="logo header-logo"></img>
            
            {/*NavBar*/}
            <div>
                <nav className="nav-bar">
                    <ul className="unordered-nav-li">
                        <li><a className="nav-list-item" href="#home" id="home-active">HOME</a></li>
                        <li><a className="nav-list-item" href="#about-me">ABOUT ME</a></li>
                        <li><a className="nav-list-item" href="#plans">PLANS</a></li>
                        <li><a className="nav-list-item" href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>

            {/*Call to Action Button*/}
            <div>
                 <a href="#plans-section"><Button className={isActive ? 'golden-right-active' : 'golden-right'} text="Let's Work!" onClick={handleClick1}/></a>
            </div>

            {/*Header Content*/}
            
                <div className="hero-image-container">
                    <img className="hero-image" src={Hero} alt="Header of Capressa With her arm extended forward to welcome all to her website"></img>
                </div>
                <div className="hero-text-container">
                    <img className="chat-bubble1" src={Bubble1} alt="chat-bubble1"></img>
                    <HeroTypeWritter/>
                </div>
            <img className="HeroBee" src={HeroBee} alt="side bee"/>
            <img className="hero-arrow" src={Arrow} alt="side bee"/>

        <div className="background-hero"> </div>
    </div>
  );
}

export default Header;