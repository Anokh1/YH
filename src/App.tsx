// src/App.tsx
import React from 'react';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from './pages/Home';
import Navbar from './AppTopbar';
import Footer from './AppFooter';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const App: React.FC = () => {
    const location = useLocation();

    // Hide Navbar and Footer on the Auth page
    const hideNavFooter = location.pathname === '/auth';

    return (
        <div className="App">
            {!hideNavFooter && <Navbar />}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {!hideNavFooter && <Footer />}
        </div>
    );
};

const AppWrapper: React.FC = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
