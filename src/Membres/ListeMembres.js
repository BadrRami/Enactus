import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { supprimerMembre } from '../Features/ThunkUsers';

const ListeMembres = () => {
    const { connectedUser, loading, error,listUsers } = useSelector((state) => state.users);
    const resultat = listUsers.filter((ele) => ele.statut==="Membre")
    const dispatch=useDispatch()
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
                                {connectedUser.role==="president" || connectedUser?.role === "VISE TEAM LEADER" ? 
                                <th>Actions</th>
                                :""}
                    </tr>
                </thead>
                <tbody>
                    {
                        resultat.map((el,index)=>(
                            <tr key={el.id}>
                                <th>{index + 1}</th>
                                <td>{el.nom }</td>
                                <td>{el.email }</td>
                                <td>{el.filiere }</td>
                                <td>{el.etatCotisation === true ? "✔": "❌" }</td>
                                <td>{el.tel}</td>
                                {connectedUser.role==="president" || connectedUser?.role === "VISE TEAM LEADER" ? 
                                <td>
                                    <Link to={`/modifierMembre/${el.id}`} className='btn btn-warning'>🖊</Link>
                                    <button className='btn btn-danger' onClick={()=>dispatch(supprimerMembre(el.id))}>🗑</button>  
                                </td>
                                :''}
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
