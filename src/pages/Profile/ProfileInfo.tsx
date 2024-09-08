import React from 'react';
import { Card } from 'primereact/card';
import '../../css/ProfileInfo.css';

const ProfileInfo: React.FC = () => {
    return (
        <Card className="profile-info">
            <h3>Personal Information</h3>
            <p><strong>Username:</strong> icebear393</p>
            <p><strong>Email:</strong> adrianheart@gmail.com</p>
            <p><strong>Location:</strong> Penang, MY</p>
        </Card>
    );
};

export default ProfileInfo;
