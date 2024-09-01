// src/pages/Auth/AuthForm.tsx
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

interface AuthFormProps {
    toggleAuthMode: () => void;
}

export const AuthLogin: React.FC<AuthFormProps> = ({ toggleAuthMode }) => {
    return (
        <div className="auth-form">
            <h2>Login</h2>
            <div className="p-field">
                <label htmlFor="username">Username</label>
                <InputText id="username" />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password</label>
                <Password id="password" feedback={false} />
            </div>
            <Button label="Login" icon="pi pi-sign-in" />
            <p className="auth-switch">
                Don't have an account? <span onClick={toggleAuthMode}>Create one here</span>.
            </p>
        </div>
    );
};
