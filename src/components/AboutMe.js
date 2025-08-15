import React from 'react';
import '.././App.css';
import Carousel from './Carousel.js';
import AboutMeLeft from '.././assets/AboutMeLeft.svg';
import AboutToPlans from '.././assets/AboutToPlans.svg';

function AboutMe() {
    return (
        <div>
            <Carousel/>
            <img src={AboutMeLeft} alt="background Hexagons"></img>
            <div>

                <div className="about-me-content">
                    <p>My journey hasn’t been a straight path. In high school, I was active in cheer and dance but had no idea how to eat healthy. I was a vegetarian living off pasta and sugar, and while my teenage metabolism and active lifestyle kept me at a healthy weight, those habits caught up with me in college. Between working multiple jobs, school, and stress eating, I gained 52 pounds by the time I graduated. In 2019, I decided to make a change. I focused on building better habits, like consistent exercise and mindful eating, instead of chasing quick fixes. Over time, I lost 35 pounds and fell in love with bodybuilding, earning first place and professional athlete status in my first WBFF competition. But I realized that extreme competition prep wasn’t sustainable—it left me burned out, struggling with food guilt, and resenting the gym.</p>
                </div>
                <div>
                    <h1 className="about-me-title">About Capressa</h1>
                </div>

            </div>
            <img src={AboutToPlans} alt="background Hexagons"></img>
        </div>        
    )
}

export default AboutMe;