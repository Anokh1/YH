// src/pages/Contact/ContactPage.tsx
import React from 'react';
import '../../css/Contact.css';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="contact-section">
                <ContactInfo />
                <ContactForm />
            </div>
            <ContactMap />
        </div>
    );
};

export default Contact;
