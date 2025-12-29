import React, { useEffect } from 'react';
import LeftBar from '../LeftBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { supprimerTransactions } from '../Features/ThunkTransactions';

const ListeTransaction = () => {
    const {listeTransaction, loading, error} = useSelector((state) => state.transactions);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
    dispatch(supprimerTransactions(id));
   };
    return (
        <div className='d-flex'>
            <LeftBar    />
            <div>
                <h2>Liste des Transactions</h2>
                <Link className="btn btn-success" to="/ajouterTransaction">Ajouter une transaction</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td>Loading...</td></tr>}
                        {error && <tr><td>Error: {error}</td></tr>}
                        {!loading && !error && listeTransaction.map((transaction, index) => (
                            <tr key={transaction.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{transaction.description}</td>
                                <td>{transaction.montant}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.categorie}</td>
                                <td>
                                    <Link to={`/modifierTransaction/${transaction.id}`} className="btn btn-warning btn-sm me-2">🖊</Link>
                                    <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(transaction.id)}>🗑</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default ListeTransaction;
