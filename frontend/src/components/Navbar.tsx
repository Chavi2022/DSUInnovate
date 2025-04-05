import React from 'react';
import '../css/Navbar.css'
import companyLogo from "../assets/images/logo.png"
import languageIcon from "../assets/images/language icon.png"
import audioIcon from "../assets/images/audio icon.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='titleContainer'>
                <img src={companyLogo} className="icon" />
                <h4 style={{
                    display: 'block',
                }}>
                    <a href="/">SoilChat AI</a>
                </h4>
            </div>
            <div className='otherIcons'>
                <span className="material-icons icons">language</span>
                <span className="material-icons icons">volume_up</span>
            </div>
        </nav >
    );
};

export default Navbar;
