import React, { use } from 'react';
import LeftBar from '../LeftBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { supprimerMembre } from '../Features/ThunkUsers';

const Equipe = () => {
    const dispatch= useDispatch()
    const results = useSelector((state) => state.users.listUsers);
    const equipeMembers = results.filter(
        (user) => String(user.statut) === "Bureau"
    );
    return (
        <div className='d-flex'>
            <LeftBar    />
            <div>
                <h2>Gestion des Équipes</h2>
                <p>Ici, vous pouvez gérer les équipes de votre organisation. Vous pouvez ajouter, modifier ou supprimer des membres d'équipe et attribuer des rôles spécifiques à chaque membre.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom de l'Équipe</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rôle</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipeMembers.map((member, index) => (
                            <tr key={member.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{member.nom}</td>
                                <td>{member.email}</td>
                                <td>{member.role}</td>
                                <td>
                                    <Link to={`/modifierMembreEquipe/${member.id}`} className='btn btn-warning'>🖊</Link>
                                    <button className='btn btn-danger mx-2' onClick={()=>dispatch(supprimerMembre(member.id))}>🗑</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           

        </div>
    );
}

export default Equipe;
