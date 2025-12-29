import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

export const getUsers= createAsyncThunk("Users/getUsers", () =>{
    return axios.get("http://localhost:5000/users").then((response) => response.data)
})
export const ajouterMembre = createAsyncThunk("Membre/ajouterMembre", async (data) => { 
    const response = await axios.post("http://localhost:5000/users", data); 
    return response.data; 
})
export const modifierMembre = createAsyncThunk("Membre/modifierMembre", async ({id, data}) => { 
    const response = await axios.put(`http://localhost:5000/users/${id}`, data); 
    return response.data; 
});