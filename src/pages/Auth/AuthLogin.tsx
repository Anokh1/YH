import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react';

interface AuthFormProps {
    toggleAuthMode: () => void;
}

export const AuthLogin: React.FC<AuthFormProps> = ({ toggleAuthMode }) => {
    return (
        <div className="auth-form">
            <h2>Login</h2>
            <div className="p-field">
                <label htmlFor="username">Username</label>
                <InputText id="username" className="p-inputtext-sm" />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password</label>
                <InputText id="username" className="p-inputtext-sm" type='password' />
            </div>
            <Button label="Login" icon="pi pi-sign-in" className="p-button-rounded" />
            <p className="auth-switch">
                Don't have an account? <span onClick={toggleAuthMode}>Create one here</span>.
            </p>
        </div>
    );
};