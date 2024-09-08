import React from 'react';
import { Card } from 'primereact/card';
import '../../css/ProfileStats.css';

const ProfileStats: React.FC = () => {
    return (
        <Card className="profile-stats">
            <h3>Profile Stats</h3>
            <p><strong>Posts:</strong> 24</p>
            <p><strong>Followers:</strong> 140</p>
            <p><strong>Following:</strong> 75</p>
        </Card>
    );
};

export default ProfileStats;
