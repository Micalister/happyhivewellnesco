import React, { useState } from 'react';
import '.././App.css';

function NavBar() {

    const [isActive, setIsActive] = useState(false);

    const handleClickHamburgerMenu = () => {
        setIsActive(prevState => !prevState);

        setTimeout(() => {
        window.history.replaceState(null, null, window.location.pathname); // resets URL after every navbar click
    }, 1000);

     };

    return (
        <div>
            <div className={isActive ? 'hamburger-menu-button-active' : 'hamburger-menu-button'} onClick={handleClickHamburgerMenu}></div>

            <div className={isActive ? 'mobile-nav-bar-active' : 'mobile-nav-bar'}>
                <nav className="nav-bar">
                    <ul className="unordered-nav-li">
                        <li><a className="nav-list-item" href="#home" id="home-active" onClick={handleClickHamburgerMenu}>HOME</a></li>
                        <li><a className="nav-list-item" href="#about-me" onClick={handleClickHamburgerMenu}>ABOUT ME</a></li>
                        <li><a className="nav-list-item" href="#plans-section" onClick={handleClickHamburgerMenu}>PLANS</a></li>
                        <li><a className="nav-list-item" href="#contact-form" onClick={handleClickHamburgerMenu}>CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;