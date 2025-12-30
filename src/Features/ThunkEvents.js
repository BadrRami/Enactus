import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

export const getEvents= createAsyncThunk("Events/getEvents", () =>{
    return axios.get("http://localhost:5002/Events").then((response) => response.data)
})
export const ajouterEvents = createAsyncThunk("Events/ajouterEvents", async (data) => { 
    const response = await axios.post("http://localhost:5002/Events", data); 
    return response.data; 
});
export const modifierEvents = createAsyncThunk("Events/modifierEvents", async ({id, data}) => { 
    const response = await axios.put(`http://localhost:5002/Events/${String(id)}`, data); 
    return response.data; 
});
export const supprimerEvents = createAsyncThunk("Events/supprimerEvents", async (id) => { 
    await axios.delete(`http://localhost:5002/Events/${String(id)}`); 
    return id; 
});