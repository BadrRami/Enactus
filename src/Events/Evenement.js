import React from 'react';
import LeftBar from '../LeftBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Evenement = () => {
    const { listUsers, connectedUser, error } = useSelector(state => state.users);
    const { listEvents, loading } = useSelector(state => state.Events);

    if (!connectedUser) {
        return <div>{error || "Vous devez être connecté pour voir les événements."}</div>;
    }

    return (
        <div className='d-flex'>
            <LeftBar />
            <div className="flex-grow-1 p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>✨ Événements</h2>
                    {connectedUser.role === "Responsable Media" ||connectedUser.role === "president" || connectedUser?.role === "VISE TEAM LEADER" && (
                        <Link to="/ajouteEvent" className='btn btn-success'>Ajouter un événement</Link>
                    )}
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titre</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Lieu</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                   <tbody>
                    {listEvents.map((event, index) => (
                        <tr key={event.id}>
                        <td>{index + 1}</td>
                        <td>{event.nom}</td>
                        <td>{event.date}</td>
                        <td>{event.description}</td>
                        <td>{event.lieu}</td>
                        <td>
                            <Link to={`/modifierEvent/${event.id}`} className="btn btn-warning">🖊</Link>
                            <button className="btn btn-danger">🗑</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Evenement;
