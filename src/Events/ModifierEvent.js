import React, { useState } from 'react';
import LeftBar from '../LeftBar';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modifierEvents } from '../Features/ThunkEvents';

const ModifierEvent = () => {
    const [nom, setNom] = useState('')
    const [date, setDate] = useState('')
    const [lieu, setLieu] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { listEvents, loading } = useSelector(state => state.Events);
    const {id} = useParams()
    function handleSubmit(e){
        e.preventDefault()
        if (!nom.trim() || !date || !description.trim() || !lieu.trim()) {
            alert("Tous les champs sont obligatoires");
            return;
        }

        if (new Date(date) <= new Date()) {
            alert("La date doit être future");
            return;
        }
        const updatedEvent = {
            id: id,
            data:{
            nom:nom,
            date:date,
            lieu:lieu,
            description:description,
            updated_at: new Date().toISOString()
            }
        }
        dispatch(modifierEvents(updatedEvent));
        navigate('/evenement');
    }
     React.useEffect(() => {
            const Event = listEvents.find(el => String(el.id) === String(id));
            if (Event) {
                setNom(Event.nom || "");
                setDate(Event.date || "");
                setLieu(Event.lieu || "");
                setDescription(Event.description || "");
            }
            }, [id, listEvents]);
    return (
        <div className='d-flex'>
            <LeftBar />
            <div>
                <h2>🖊 Modifier Evenement</h2>
                <form className="container mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">Nom de l'Événement</label>
                    <input type="text" className="form-control" id="eventName" value={nom} onChange={(e)=> setNom(e.target.value)} placeholder="Entrez le nom de l'événement" />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">Date de l'Événement</label>
                    <input type="date" className="form-control" id="eventDate" value={date} onChange={(e)=> setDate(e.target.value)} placeholder="Entrez la date de l'événement"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lieu" className="form-label">Lieu</label>
                    <input type="text" className="form-control" id="lieu" value={lieu} onChange={(e)=> setLieu(e.target.value)} placeholder="Entrez le lieu de l'événement"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">Description de l'Événement</label>
                    <textarea className="form-control" id="eventDescription"value={description} onChange={(e)=> setDescription(e.target.value)} rows="3" placeholder="Entrez la description de l'événement"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Modifier Événement</button>
            </form>

            </div>
            
        </div>
    );
}

export default ModifierEvent;
