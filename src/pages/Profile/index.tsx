import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import '../../css/Profile.css';
import ProfileStats from './ProfileStats';
import ProfileSettings from './ProfileSettings';

const Profile: React.FC = () => {
    return (
        <div className="profile-page">
            {/* Header Section */}
            <ProfileHeader />

            {/* Main Profile Content */}
            <div className="profile-content">
                <div className="profile-left">
                    {/* User Information */}
                    <ProfileInfo />
                </div>
                
                <div className="profile-right">
                    {/* Profile Statistics and Settings */}
                    <ProfileStats />
                    <ProfileSettings />
                </div>
            </div>
        </div>
    );
};

export default Profile;
