import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftBar from './LeftBar';

const Profile = () => {
    const { connectedUser, loading, error } = useSelector((state) => state.users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {connectedUser ? (
                <>
                <div className='d-flex'>
                    <LeftBar />
                    <div>
                        <h2>Profile</h2>
                        <p>Name: {connectedUser.nom}</p>
                        <p>Email: {connectedUser.email}</p>
                        <p>Role: {connectedUser.role}</p>
                    </div>
                </div>
                </>
            ) : (
                <p>No user found. Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
