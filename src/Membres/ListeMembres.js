import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListeMembres = () => {
    const { connectedUser, loading, error,listUsers } = useSelector((state) => state.users);
    const resultat = listUsers.filter((ele) => ele.statut==="Membre")
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <>
        <h2>Lites des membres</h2>
            <table className='table'>
                <thead>
                    <tr>
                                <th>#</th>
                                <th>Nom Complet</th>
                                <th>Email</th>
                                <th>Filière</th>
                                <th>Cotisation</th>
                                <th>Telephone</th>
                                <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resultat.map((el,index)=>(
                            <tr>
                                <th>{index + 1}</th>
                                <td>{el.nom }</td>
                                <td>{el.email }</td>
                                <td>{el.filiere }</td>
                                <td>{el.etatCotisation === true ? "✔": "❌" }</td>
                                <td>{el.tel}</td>
                                <td>
                                    <Link to={`/modifierMembre/${el.id}`} className='btn btn-warning'>🖊</Link>
                                    <button className='btn btn-danger'>🗑</button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>

            </table>
         </>
    );
}

export default ListeMembres;
