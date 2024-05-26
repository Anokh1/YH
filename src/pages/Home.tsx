// src/pages/Home.tsx
import React from 'react';
import '../styles/Home.css'; // Import custom CSS file for homepage styling
import HeartAnimation from '../components/HeartAnimation';
import HomeForm from '../components/HomeForm';

const Home: React.FC = () => {
    const handleSubmit = (formData: { name: string; password: string }) => {
        // Handle form submission here
        console.log('Form submitted with data:', formData);
    };
    return (
        <div className="home-container"> {/* Apply custom class */}
            {/* <HeartAnimation /> */}
            <HomeForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Home;
