import React, { useState } from 'react';
import '.././App.css';
import ContactBackground from '../assets/contact-background.svg';
import ContactHex from '../assets/contact-hex.svg';
import MessageHex from '../assets/hex-highlight.svg';

function Contact() {

    const [isActive, setIsActive] = useState(false);
    

    /* onClick Statements */
    const handleClick1 = () => {
        setIsActive(prevState => !prevState); // Toggle the state immediately
    setTimeout(() => {
        setIsActive(prevState => !prevState); // Toggle it back after 1 second
    }, 1000);
    };

    return(
        <div id="contact">
            <img src={ContactBackground} className="contact-background" alt="contact section background"/>
            <div className="contact-card">
                <h1>Let's Connect</h1>
                <h4>Tell me your goals and what plan best fits your needs!</h4>

                <form>
                    <input type="name" placeholder="NAME..." required></input>
                        <img src={ContactHex} className="contact-hex contact-hex-a" alt="Input box decoration"/>
                    <input type="email number" placeholder="PHONE OR EMAIL..." required></input>
                        <img src={ContactHex} className="contact-hex contact-hex-b" alt="Input box decoration"/>
                    <input type="subject" placeholder="SUBJECT..." required></input>
                        <img src={ContactHex} className="contact-hex contact-hex-c" alt="Input box decoration"/>
                    <textarea type="message" placeholder="MESSAGE..." required></textarea>
                        <img src={MessageHex} className="contact-hex-message" alt="Input box decoration"/>
                    <button type="submit" className={isActive ? 'submit-left-active' : 'submit-left'} onClick={handleClick1}>SUBMIT!</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;