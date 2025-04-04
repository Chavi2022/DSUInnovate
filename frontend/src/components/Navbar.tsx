import React from 'react';
import '../css/Navbar.css'
import companyLogo from "../assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 style={{
                display: 'block',
            }}>
                <a href="/">SoilChat</a>
            </h1>
            <img src={companyLogo} width={70} height={70} style={{
                verticalAlign: 'middle',
                padding: '10, 30, 10, 30 ',
            }} />
        </nav>
    );
};

export default Navbar;
