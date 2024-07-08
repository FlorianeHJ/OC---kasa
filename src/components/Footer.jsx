import React from 'react';
import logo2 from "../assets/white-logo.svg";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo2} alt="Logo Kasa noir et blanc" className='logo2' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;