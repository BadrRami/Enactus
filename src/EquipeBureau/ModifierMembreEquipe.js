import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LeftBar from '../LeftBar';
import { modifierMembre } from '../Features/ThunkUsers';

const ModifierMembreEquipe = () => {
    const [nom, setnom] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams()
    const { listUsers, loading } = useSelector(state => state.users);
    function handleSubmit(e){
        e.preventDefault()
        if(String(nom).trim() === ""  || String(email).trim()==="" || String(password).trim()==="" || String(confirmPassword).trim()=== "" || String(role).trim()===""){
            alert("Vous devez remplir tous les champs")
            return
        }
        if(password !==confirmPassword){
            alert("les deux mots de passe doivent etre identique")
            return
        }
        const updatedMmebreEquipe = {
            id: id,
            statut:'Bureau',
            data:{
            nom:nom,
            email:email,
            password:password,
            role:role,
            updated_at: new Date().toISOString()
            }
        }
        dispatch(modifierMembre(updatedMmebreEquipe));
        navigate('/equipe');
    }
    React.useEffect(() => {
                const MmebreEquipe = listUsers.find(el => String(el.id) === String(id));
                if (MmebreEquipe) {
                    setnom(MmebreEquipe.nom || "");
                    setEmail(MmebreEquipe.email || "");
                    setPassword(MmebreEquipe.password || "");
                    setConfirmPassword(MmebreEquipe.password || "");
                    setRole(MmebreEquipe.role || "");
                }
    }, [id, listUsers]);
    return (
        <div className='d-flex'>
            <LeftBar />
            <div>
                <h2>🖊 Modifier un membre de bureau</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom de membre l'Équipe</label>
                        <input type="text" className="form-control" value={nom} onChange={(e) => setnom(e.target.value)} id="nom" placeholder="Entrez le nom de l'équipe" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email'>Email de membre de l'Équipe</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Entrez l'email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Créer un mot de pass de le membre</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Entrez le mot de pass" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ConfirmPassword" className="form-label">Confirmer le mot de passe</label>
                        <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="ConfirmPassword" placeholder="Confirmez le mot de passe" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Rôle dans l'Équipe</label>
                        <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} id="role" placeholder="Entrez le rôle" />
                    </div>

                    <button type="submit" className="btn btn-primary">Modifier membre d'Équipe</button>
                </form>
            </div>
            
        </div>
    );
}

export default ModifierMembreEquipe;
