import React, { use } from 'react';
import LeftBar from './LeftBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Equipe = () => {
    const results = useSelector((state) => state.users.listUsers);
    const equipeMembers = results.filter(
        (user) => String(user.role).toLowerCase() === "vise team leader" || String(user.role).toLowerCase() === "president" 
        || String(user.role).toLowerCase() === " Responsable RH" || String(user.role).toLowerCase() === "treasurer"
        || String(user.role).toLowerCase() === "Responsable communication"
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
                                <td>{member.teamName}</td>
                                <td>{member.email}</td>
                                <td>{member.role}</td>
                                <td>
                                    <Link className='btn btn-warning'>🖊</Link>
                                    <Link className='btn btn-danger mx-2'>🗑</Link>
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
