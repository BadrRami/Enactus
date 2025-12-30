import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

export const getUsers= createAsyncThunk("Users/getUsers", () =>{
    return axios.get("http://localhost:5000/users").then((response) => response.data)
})
/*export const ajouterMembre = createAsyncThunk("Membre/ajouterMembre", async (data) => { 
    const response = await axios.post("http://localhost:5000/users", data); 
    return response.data; 
})*/
/*export const modifierMembre = createAsyncThunk("Membre/modifierMembre", async ({id, data}) => { 
    const response = await axios.put(`http://localhost:5000/users/${id}`, data); 
    return response.data; 
}); */
/*export const supprimerMembre = createAsyncThunk("Membre/supprimerMembre", async(id)=>{
    await axios.delete(`http://localhost:5000/users/${id}`); 
    return id; 
});*/
export const ajouterMembre = createAsyncThunk(
  "Membre/ajouterMembre",
  async (newUser) => {
    // PAS d'ID ici : JSON Server le génère
    const response = await axios.post(
      "http://localhost:5000/users",
      newUser
    );
    return response.data; // contient l'ID généré côté serveur
  }
);

export const modifierMembre = createAsyncThunk(
  "Membre/modifierMembre",
  async ({ id, data }) => {
    const numericId = String(id); // assure que c’est un number
    // Vérifie que l'utilisateur existe avant PUT
    const { data: exist, error: existError } = await axios.get(
      `http://localhost:5000/users/${numericId}`
    );
    if (!exist) throw new Error("Utilisateur non trouvé sur le serveur");

    const response = await axios.put(
      `http://localhost:5000/users/${numericId}`,
      data
    );
    return response.data;
  }
);


export const supprimerMembre = createAsyncThunk(
  "Membre/supprimerMembre",
  async (id) => {
    const numericId = String(id); // 🔥 FIX ICI
    await axios.delete(`http://localhost:5000/users/${numericId}`);
    return numericId;
  }
);