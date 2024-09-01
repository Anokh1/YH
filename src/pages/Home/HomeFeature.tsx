// src/pages/FeatureSection.tsx
import React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <div className="feature-section">
            <h2>Our Features</h2>
            <div className="features">
                <div className="feature-item">
                    <i className="pi pi-check-circle"></i>
                    <h3>Fast Performance</h3>
                    <p>Our platform ensures fast and reliable performance.</p>
                </div>
                <div className="feature-item">
                    <i className="pi pi-shield"></i>
                    <h3>Secure Data</h3>
                    <p>We prioritize the security and privacy of your data.</p>
                </div>
                <div className="feature-item">
                    <i className="pi pi-globe"></i>
                    <h3>Global Access</h3>
                    <p>Access your data from anywhere in the world.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
