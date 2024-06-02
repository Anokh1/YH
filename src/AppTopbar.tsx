import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import "./css/Navbar.css";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const items = [
        {
            label: 'YH', // Text label for the logo
            className: 'logo-item', // Add a custom class to style the logo separately
            command: () => {
                // Handle click event for the logo if needed
                console.log('Logo clicked');
            }
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => {
                // Handle click event for Home
                console.log('Home clicked');
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            command: () => {
                // Handle click event for About
                console.log('About clicked');
            }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => {
                // Handle click event for Contact
                console.log('Contact clicked');
            }
        }
    ];

    return (
        <div className="navbar">
            <div className="menu-container">
                <Menubar model={items} />
            </div>
            {showMenu && (
                <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
