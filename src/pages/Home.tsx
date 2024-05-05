// src/pages/Home.tsx
import React from 'react';
import '../styles/Home.css'; // Import custom CSS file for homepage styling
import HeartAnimation from '../components/HeartAnimation';

const Home: React.FC = () => {
    return (
        <div className="home-container"> {/* Apply custom class */}
            {/* <h1>Welcome to My Website</h1> */}
            {/* <p>This is the homepage of my website.</p> */}
            <HeartAnimation />
        </div>
    );
};

export default Home;
