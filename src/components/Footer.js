import React, { useState } from 'react';
import '.././App.css';
import FooterBackground from'../assets/footer-background.svg'
import Logo from '.././assets/logo.svg';
import Button from './Button.js';
import LinkIcon from '.././assets/link-icon.svg';
import InstaIcon from '.././assets/insta-icon.svg';
import AmzIcon from '.././assets/amz-icon.svg';
import TraIcon from '.././assets/tra-icon.svg';


function Footer() {

    const [isActive, setIsActive] = useState(false);
    
        /* onClick Statements */
        const handleClick1 = () => {
            setIsActive(prevState => !prevState); // Toggle the state immediately
        setTimeout(() => {
            setIsActive(prevState => !prevState); // Toggle it back after 1 second
        }, 1000);
        };

    return (
        <div id="footer">
            <img className="footer-logo" src={Logo} alt="Happy hive wellness co logo"/>
            <div className="footer-grid">
                <div className="footer-grid-element">
                    <Button className={isActive ? 'golden-left-active' : 'golden-left'} text="To The Top!" onClick={handleClick1}/>
                </div>
                <div className="footer-grid-element">
                    <div className="footer-card footer-card-left">
                        <img src={LinkIcon} className="link-icon" alt="Extra Links Icon"/>
                        <div>
                            <a href="#instagram" className="footer-card-left-links">
                                <img src={InstaIcon} alt="Instagram Logo"/>
                                <p>Instagram</p>
                            </a>
                            <a href="#amazon" className="footer-card-left-links">
                                <img src={AmzIcon} alt="Amazon Logo"/>
                                <p>Amazon Store</p>
                            </a>
                            <a href="#tra" className="footer-card-left-links">
                                <img src={TraIcon} alt="ABC Trainerize Logo"/>
                                <p>Trainerize</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-grid-element">
                    <div className="footer-card footer-card-right">
                        <h4>Our Mission</h4>
                        <p>At Habit Hive Wellness Co., our mission is to help busy women build strong bodies, balanced minds, and lasting habits—one sustainable step at a time. We’re here to ditch the “all or nothing” approach and create a buzzing foundation for lifelong wellness.</p>
                        <h4>Our Vision</h4>
                        <p>To grow a vibrant hive of empowered women who feel confident, capable, and connected—both to themselves and to a community that cheers them on.</p>
                    </div>
                </div>
            </div>
            <img className="footer-background" src={FooterBackground} alt="Footer background" />
        </div>
    );
};

export default Footer