import React from 'react';
import '../../css/Profile.css';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileEditButton from './ProfileEditButton';

const Profile: React.FC = () => {
    return (
        <div className="profile-container">
            <ProfileHeader />
            <ProfileInfo />
            <ProfileEditButton />
        </div>
    );
};

export default Profile;
