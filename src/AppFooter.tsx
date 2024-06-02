import React from 'react';
import './css/Footer.css';
import myLogo from './assets/logo.png'


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
      <img src={myLogo} alt="My Logo" className="footer-logo" />
        <span className="text-muted">Sometime 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
