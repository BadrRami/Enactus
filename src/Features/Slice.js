import { createSlice } from '@reduxjs/toolkit';
import { ajouterMembre, getUsers, modifierMembre } from './ThunkUsers';

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
      .addCase(ajouterMembre.fulfilled, (state, action) => {
        state.listUsers.push(action.payload);
      })
      .addCase(modifierMembre.fulfilled,(state,action)=>{

      });
  }
});

export const { trouverUsers } = sliceUsers.actions;
export default sliceUsers.reducer;
