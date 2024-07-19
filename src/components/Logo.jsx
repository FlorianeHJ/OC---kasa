import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div > 
            <Link to="/"><img src={logo} alt="Logo Kasa" className="logo"/></Link>
        
            
        </div>
    );
};

export default Logo;