import { createSlice } from '@reduxjs/toolkit';
import { ajouterMembre, getUsers, modifierMembre, supprimerMembre } from './ThunkUsers';

export const sliceUsers = createSlice({
  name: 'users',
  initialState: {
    listUsers: [],        
    loading: false,
    error: null,
    connectedUser: null
  },
  reducers: {
    trouverUsers: (state, action) => {
      const { email, password } = action.payload;
      if (Array.isArray(state.listUsers)) {
        const user = state.listUsers.find(
          (user) => user.email === email && user.password === password
        );
        state.connectedUser = user || null;
      } else {
        state.connectedUser = null;
      }
    },
    ajouterMembre: (state, action) => {
        const newMmebre = action.payload;
        if(newMmebre){
            state.listUsers.push(newMmebre);
        }
    },
    },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.listUsers = action.payload; // ✅ ici on stocke la liste réelle
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Code pour ajouter , modifier et supprimer les Membres dans le serveur Users
      .addCase(ajouterMembre.fulfilled, (state, action) => {
        state.listUsers.push(action.payload);
      })
      .addCase(modifierMembre.pending,(state, action)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(modifierMembre.fulfilled,(state,action)=>{
        state.loading = false;
        const { id,statut, nom, email, filiere,password,etatCotisation,tel } = action.payload;
        const stringId = String(id);
        const Membre = state.listUsers.find((m) => m.id === stringId);
        if(Membre){
          Membre.nom = nom
          Membre.email=email
          Membre.filiere=filiere
          Membre.password=password
          Membre.etatCotisation=etatCotisation
          Membre.tel=tel
        }

      })
      .addCase(modifierMembre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })


      .addCase(supprimerMembre.pending, (state) => {
      state.loading = true;
      })
      .addCase(supprimerMembre.fulfilled, (state, action) => {
        state.loading = false;
        state.listUsers = state.listUsers.filter(
          el => String(el.id) !== String(action.payload)
        );
      })
      .addCase(supprimerMembre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    }
});

export const { trouverUsers } = sliceUsers.actions;
export default sliceUsers.reducer;
