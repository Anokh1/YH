// src/App.tsx
import React from 'react';
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
