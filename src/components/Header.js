import React, { useState } from 'react';
import '.././App.css';
import NavBar from './NavBar.js';
/* SVG assets */
import Logo from '.././assets/logo.svg';
import Hero from '.././assets/hero.svg';
import Bubble1 from '.././assets/chat-bubble1.svg';
import Bubble2 from '.././assets/chat-bubble2.svg';
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
        window.location.hash = '#plans-section';
    setTimeout(() => {
        window.history.replaceState(null, null, window.location.pathname); //resets button for reuse
        setIsActive(prevState => !prevState); // Toggle it back after 1 second
    }, 1000);
    };

  return (
    <div className="background-header" id="home">
            {/*Header and Logo*/}
            <h1 className="header-title">Habit Hive Wellness Co.</h1>
            <img src={Logo} alt="Happy Hive Wellness Co. Logo" className="logo header-logo"></img>
            <NavBar></NavBar>

            {/*Call to Action Button*/}
            <div>
                 <Button className={isActive ? 'golden-right-active' : 'golden-right'} text="Let's Work!" onClick={handleClick1} src="#plans-section"/>
            </div>

            {/*Header Content*/}
            
                <div className="hero-image-container">
                    <img className="hero-image" src={Hero} alt="Header of Capressa With her arm extended forward to welcome all to her website"></img>
                </div>
                <div className="hero-text-container">
                    <img className="chat-bubble1" src={Bubble1} alt="chat-bubble1"></img>
                    <img className="chat-bubble2" src={Bubble2} alt="chat-bubble2"></img>
                    <HeroTypeWritter/>
                </div>
            <img className="HeroBee" src={HeroBee} alt="side bee"/>
            <img className="hero-arrow" src={Arrow} alt="side bee"/>

        <div className="background-hero"> </div>
    </div>
  );
}

export default Header;