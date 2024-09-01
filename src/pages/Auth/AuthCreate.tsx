import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react';

interface AuthCreateAccountFormProps {
    toggleAuthMode: () => void;
}

export const AuthCreate: React.FC<AuthCreateAccountFormProps> = ({ toggleAuthMode }) => {
    return (
        <div className="auth-form">
            <h2>Create Account</h2>
            <div className="p-field">
                <label htmlFor="username">Username</label>
                <InputText id="username" className="p-inputtext-sm" />
            </div>
            <div className="p-field">
                <label htmlFor="email">Email</label>
                <InputText id="email" className="p-inputtext-sm" />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password</label>
                <InputText id="password" className="p-inputtext-sm" type='password' />
            </div>
            <div className="p-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <InputText id="confirmPassword" className="p-inputtext-sm" type='password' />
            </div>
            <Button label="Create Account" icon="pi pi-user-plus" className="p-button-rounded" />
            <p className="auth-switch">
                Already have an account? <span onClick={toggleAuthMode}>Login here</span>.
            </p>
        </div>
    );
};