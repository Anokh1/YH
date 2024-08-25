import React from 'react';
import './css/Footer.css';
import myLogo from './assets/love.png';

const Footer: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        {/* Other content of the page will go here */}
      </div>
      <footer className="footer">
        <div className="container">
          <img src={myLogo} alt="My Logo" className="footer-logo" />
          <span className="text-muted">Sometime 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
