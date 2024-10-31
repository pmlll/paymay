import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="content-block">
            <h2>Особистий Кабінет</h2>
            <p>Ім`я: {user.name}</p>
            <p>Пошта: {user.email}</p>
            <p>Статус акаунту: {user.status}</p>
        </div>
    );
};

export default Profile;
