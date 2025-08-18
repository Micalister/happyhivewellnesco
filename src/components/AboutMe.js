import React from 'react';
import '.././App.css';
import Carousel from './Carousel.js';
//import AboutMeLeft from '.././assets/AboutMeLeft.svg';
//import AboutToPlans from '.././assets/AboutToPlans.svg';
import aboutcapressa from '.././assets/aboutcapressa.svg';

function AboutMe() {
    return (
        <div>
            <div className="about-me-hex-left">
            <Carousel/>
            </div>
            {/*<img className="about-me-hex-left" src={AboutMeLeft} alt="background Hexagons"></img>*/}

            {/*<img src={AboutToPlans} alt="background Hexagons"></img>*/}
            <div className="about-me-hex-left-right">
                <img className="aboutcapressa" src={aboutcapressa} alt="Capressa explaining her about me section"></img>
            </div>
        </div>        
    )
}

export default AboutMe;