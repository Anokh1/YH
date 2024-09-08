// src/pages/Contact/ContactMap.tsx
import React from 'react';

export const ContactMap: React.FC = () => {
    return (
        <div className="contact-map">
            <h3>Find Us Here</h3>
            <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153161!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f6e7fb%3A0x5045675218cee37!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1637849670272!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
            ></iframe>
        </div>
    );
};
