import React from 'react';
import { Avatar } from 'primereact/avatar';
import '../../css/ProfileHeader.css';

const ProfileHeader: React.FC = () => {
    // const avatarUrl = 'https://avatars.dicebear.com/api/adventurer/johndoe.svg'; // Updated DiceBear API for avatar
    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=Adrian Ooi`

    return (
        <div className="profile-header">
            <Avatar image={avatarUrl} size="xlarge" shape="circle" />
            <h2>Adrian Ooi</h2>
            <p className="profile-tagline">Software Engineer | Heart Enthusiast</p>
        </div>
    );
};

export default ProfileHeader;
