// src/pages/Contact/ContactForm.tsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
        
export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = () => {
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <div className="p-field">
                <label htmlFor="name">Name</label>
                <InputText
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className="p-field">
                <label htmlFor="email">Email</label>
                <InputText
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="p-field">
                <label htmlFor="message">Message</label>
                <InputTextarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                />
            </div>
            <Button label="Submit" icon="pi pi-send" onClick={handleSubmit} />
        </div>
    );
};
