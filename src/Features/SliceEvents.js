import { createSlice } from '@reduxjs/toolkit';
import { ajouterEvents, getEvents, modifierEvents, supprimerEvent } from './ThunkEvents';
export const sliceEvents = createSlice({
  name: 'events',
  initialState: {
    listEvents: [],        
    loading: false,
    error: null,
  },
  reducers:{

  },
  extraReducers: (builder)=>{
    builder
    // Lire la liste des events
    .addCase(getEvents.pending, (state)=>{
        state.loading = true
        state.error = null
    })
    .addCase(getEvents.fulfilled, (state, actions)=>{
        state.listEvents=actions.payload
        state.loading = false
    })
    .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
    })

    // ajouter un event
    .addCase(ajouterEvents.pending, (state)=>{
        state.loading = true
        state.error = null
    })
    .addCase(ajouterEvents.fulfilled, (state, actions)=>{
        state.listEvents.push(actions.payload)
        state.loading = false
    })
    .addCase(ajouterEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
    })
    // modifier event
    .addCase(modifierEvents.pending,(state, action)=>{
            state.loading = true;
            state.error = null;
    })
    .addCase(modifierEvents.fulfilled,(state,action)=>{
            state.loading = false;
            const { id, nom, date, lieu,description} = action.payload;
            const stringId = String(id);
            const Event = state.listEvents.find((m) => m.id === stringId);
            if(Event){
              Event.nom = nom
              Event.date=date
              Event.lieu=lieu
              Event.description=description
            }
    
    })
    .addCase(modifierEvents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
    })

  }
})
export const {} = sliceEvents.actions
export default sliceEvents.reducer