// src/pages/Auth/AuthCreateAccountForm.tsx
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

interface AuthCreateAccountFormProps {
    toggleAuthMode: () => void;
}

export const AuthCreate: React.FC<AuthCreateAccountFormProps> = ({ toggleAuthMode }) => {
    return (
        <div className="auth-form">
            <h2>Create Account</h2>
            <div className="p-field">
                <label htmlFor="username">Username</label>
                <InputText id="username" />
            </div>
            <div className="p-field">
                <label htmlFor="email">Email</label>
                <InputText id="email" />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password</label>
                <Password id="password" feedback={false} />
            </div>
            <div className="p-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Password id="confirmPassword" feedback={false} />
            </div>
            <Button label="Create Account" icon="pi pi-user-plus" />
            <p className="auth-switch">
                Already have an account? <span onClick={toggleAuthMode}>Login here</span>.
            </p>
        </div>
    );
};
