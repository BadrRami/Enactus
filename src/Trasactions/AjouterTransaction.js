import React from 'react';
import LeftBar from '../LeftBar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterTransactions } from '../Features/ThunkTransactions';

const AjouterTransaction = () => {
    const [description, setDescription] = React.useState('');
    const [montant, setMontant] = React.useState('');
    const [date, setDate] = React.useState('');
    const [type, setType] = React.useState('');
    const [categorie, setCategorie] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        if(String(description).trim() === "" || String(montant).trim() === "" || String(date).trim()==="" || String(type).trim()==="" || String(categorie).trim()===""){
            alert("Vous devez remplir tous les champs")
            return
        }
        if(isNaN(montant) || Number(montant) <= 0){
            alert("Le montant doit être un nombre valide");
            return;
        }
        const newTransaction = {
            id: String(Date.now()),
            description: description,
            montant: parseFloat(montant),
            date: date,
            type: type,
            categorie: categorie,
            created_at: new Date().toISOString()
        };
        dispatch(ajouterTransactions(newTransaction));
        navigate('/ListeTransaction');
    }
    return (
        <div className='d-flex'>
            <LeftBar /> 
            
            <form className="container mt-4" onSubmit={handleSubmit}>
                <h2>Ajouter une Nouvelle Transaction</h2>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Entrez la description de la transaction" />
                </div>
                <div className="mb-3">
                    <label htmlFor="montant" className="form-label">Montant</label>
                    <input type="number" className="form-control" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder="Entrez le montant de la transaction" />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type de Transaction</label>
                    <select className="form-select" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Sélectionnez le type</option>
                        <option value="Revenu">Revenu</option>
                        <option value="Dépense">Dépense</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="categorie" className="form-label" >Catégorie</label>
                    <select className="form-select" id="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                        <option value="">Sélectionnez la catégorie</option>
                        <option value="donation">Donation</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="operational">Opérationnel</option>
                        <option value="event">Événement</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Ajouter Transaction</button>
            </form>
        </div>
    );
}

export default AjouterTransaction;
