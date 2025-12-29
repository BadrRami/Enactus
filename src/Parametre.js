import React from 'react';
import LeftBar from './LeftBar';
import { useSelector } from 'react-redux';

const Parametre = () => {
    const { connectedUser, loading, error,listUsers } = useSelector((state) => state.users);
     if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className='d-flex'>
            {connectedUser &&
            <>
                <LeftBar />
                <div>
                    <h2>Modifier votre profile</h2>
                </div>
            </>
            }
            

            
        </div>
    );
}

export default Parametre;
