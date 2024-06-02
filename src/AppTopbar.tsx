// src/components/Navbar.tsx
import React from 'react';
import './css/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">YH</div>
            <div className="menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
