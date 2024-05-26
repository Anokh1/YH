// HomeForm.tsx
import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import '../styles/HomeForm.css'; // Import CSS file

interface HomeFormProps {
    onSubmit: (formData: { name: string; password: string }) => void;
}

const HomeForm: React.FC<HomeFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, password });
    };

    return (
        <div className="form-container">
            <Card title="Form">
                <form onSubmit={handleSubmit}>
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <Password id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <Button type="submit" label="Submit" />
                </form>
            </Card>
        </div>
    );
};

export default HomeForm;
