import React from 'react';
import { Button } from 'primereact/button';
import '../../css/ProfileSettings.css';

const ProfileSettings: React.FC = () => {
    return (
        <div className="profile-settings">
            <h3>Settings</h3>
            <Button label="Edit Profile" icon="pi pi-pencil" className="p-button-raised p-button-success" />
            <Button label="Logout" icon="pi pi-sign-out" className="p-button-raised p-button-danger" />
        </div>
    );
};

export default ProfileSettings;
