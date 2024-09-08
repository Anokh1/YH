import React from 'react';
import { Button } from 'primereact/button';

const ProfileEditButton: React.FC = () => {
    const handleEdit = () => {
        console.log('Edit Profile clicked');
        // Add functionality for editing the profile
    };

    return (
        <div className="profile-edit-button">
            <Button label="Edit Profile" icon="pi pi-pencil" onClick={handleEdit} />
        </div>
    );
};

export default ProfileEditButton;
