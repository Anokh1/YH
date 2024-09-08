import React from 'react';
import '../../css/About.css';
import AboutHeader from './AboutHeader';
import AboutMission from './AboutMission';
import AboutTeam from './AboutTeam';

const About: React.FC = () => {
    return (
        <div className="about-page">
            {/* Header */}
            <AboutHeader />

            {/* Mission Section */}
            <div className="about-section">
                <AboutMission />
            </div>

            {/* Team Section */}
            <div className="about-section">
                <AboutTeam />
            </div>
        </div>
    );
};

export default About;
