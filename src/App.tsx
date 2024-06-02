// src/App.tsx
import React from 'react';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from './pages';
import Navbar from './AppTopbar';
import Footer from './AppFooter';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
