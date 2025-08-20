import React from 'react';
import '.././App.css';
import FooterBackground from'../assets/footer-background.svg'
import Logo from '.././assets/logo.svg';

function Footer() {
    return (
        <div id="footer">
            <img className="footer-logo" src={Logo} alt="Happy hive wellness co logo"/>
            <div className="footer-grid">
                <div className="footer-grid-element">
                    <p>button</p>
                </div>
                <div className="footer-grid-element">
                    <div className="footer-card"></div>
                </div>
                <div className="footer-grid-element">
                    <div className="footer-card"></div>
                </div>
            </div>
            <img className="footer-background" src={FooterBackground} alt="Footer background" />
        </div>
    );
};

export default Footer