import React from 'react';
import '.././App.css';
import ContactBackground from '../assets/contact-background.svg'

function Contact() {
    return(
        <div id="contact">
            <img src={ContactBackground} className="contact-background" alt="contact section background"/>
            <div className="contact-card">
                <h1>Let's Connect</h1>
            </div>
        </div>
    );
};

export default Contact;