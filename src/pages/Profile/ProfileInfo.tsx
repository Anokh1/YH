import React from 'react';
import { Card } from 'primereact/card';

const ProfileInfo: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 Street, City, Country'
    };

    return (
        <div className="profile-info">
            <Card title="User Information" style={{ width: '100%' }}>
                <p><strong>Name: </strong>{user.name}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Address: </strong>{user.address}</p>
            </Card>
        </div>
    );
};

export default ProfileInfo;
