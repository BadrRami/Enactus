import React from 'react';
import LeftBar from '../LeftBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Evenement = () => {
    const { listUsers, connectedUser, error } = useSelector(state => state.users);

    if (!connectedUser) {
        return <div>{error || "Vous devez être connecté pour voir les événements."}</div>;
    }

    return (
        <div className='d-flex'>
            <LeftBar />
            <div className="flex-grow-1 p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>✨ Événements</h2>
                    {connectedUser.role === "Responsable Media" ||connectedUser.role === "president" && (
                        <Link to="/ajouteEvent" className='btn btn-success'>Ajouter un événement</Link>
                    )}
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titre</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ici tu peux mapper tes événements depuis le store */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Evenement;
