import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="profile full-width">
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Account Status: {user.status}</p>
        </div>
    );
};

export default Profile;
