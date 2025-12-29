import React from 'react';
import LeftBar from './LeftBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListeMembres from './Membres/ListeMembres';

const Dashboard = () => {
    const { connectedUser, loading, error,listUsers } = useSelector((state) => state.users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className='d-flex'>
            <LeftBar />
            <div>
                <div className='card'>
                    <div className='d-flex'>
                    <div>
                        <h2>Bonjour {connectedUser?.name || "Utilisateur"}</h2>
                        <p>Welcome to the dashboard!</p>
                    </div>
                    <div>
                        {connectedUser?.role === "president" && (
                            <>
                                <Link to={"/ajouterMembre"} className='btn btn-primary'>➕Ajouter Membre</Link>
                                <Link to={"/ajouterMembreEquipe"} className='btn btn-success'>➕Ajouter Membre à l'Équipe</Link>
                            </>
                        )}
                    </div>
                    </div>
                    
                </div>
                <div className='d-flex'>
                    <div className='card mt-3 col-md-4 me-2'>
                        <span>👥</span>
                        <h4>Membres Actifs:{listUsers?.filter(user => user.statut === "Membre").length || 0}</h4>
                    </div>
                    <div className='card mt-3 col-md-4 me-2'>
                        <span>💰</span>
                        <h4>Budget Total:24.5K DH</h4>
                    </div>
                </div>
                <div className='mt-4'>
                    <ListeMembres />
                </div>
            </div>
           
            
           
        </div>
    );
}

export default Dashboard;
