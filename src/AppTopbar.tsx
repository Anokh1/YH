import { Menubar } from 'primereact/menubar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Navbar.css";

const Navbar: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const items = [
        {
            label: 'YH', // Text label for the logo
            className: 'logo-item', // Add a custom class to style the logo separately
            command: () => {
                // Optionally handle logo click (navigate to home, etc.)
                navigate('/');
            }
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => {
                navigate('/'); // Navigate to Home page
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            command: () => {
                navigate('/about'); // Navigate to About page
            }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => {
                navigate('/contact'); // Navigate to Contact page
            }
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            command: () => {
                navigate('/auth'); // Navigate to Profile/Auth page
            }
        }
    ];

    return (
        <div className="navbar">
            <div className="menu-container">
                <Menubar model={items} />
            </div>
        </div>
    );
};

export default Navbar;
