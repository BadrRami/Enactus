import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTransactions = createAsyncThunk("Transactions/getTransactions", () => {
    return axios.get("http://localhost:5001/transactions").then((response) => response.data)
})
export const ajouterTransactions = createAsyncThunk("Transaction/ajouterTransaction", async (data) => { 
    const response = await axios.post("http://localhost:5001/transactions", data); 
    return response.data; 
});
export const modifierTransactions = createAsyncThunk("Transaction/modifierTransaction", async ({id, data}) => { 
    const response = await axios.put(`http://localhost:5001/transactions/${id}`, data); 
    return response.data; 
});
export const supprimerTransactions = createAsyncThunk("Transaction/supprimerTransaction", async (id) => { 
    await axios.delete(`http://localhost:5001/transactions/${id}`); 
    return id; 
});