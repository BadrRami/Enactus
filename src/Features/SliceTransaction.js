import { createSlice } from '@reduxjs/toolkit';
import { ajouterTransactions, getTransactions, modifierTransactions, supprimerTransactions } from './ThunkTransactions';

const sliceTransactions = createSlice({
    name: "transactions",
    initialState: {
        listeTransaction: [],
        loading: false,
        error: null,
    },
    reducers: {}, 
    extraReducers: (builder) => {
        builder
        // GET
        .addCase(getTransactions.pending, (state) => { state.loading = true; state.error = null; })
        .addCase(getTransactions.fulfilled, (state, action) => { state.loading = false; state.listeTransaction = action.payload; })
        .addCase(getTransactions.rejected, (state, action) => { state.loading = false; state.error = action.payload || action.error.message; })

        // ADD
        .addCase(ajouterTransactions.fulfilled, (state, action) => { state.listeTransaction.push(action.payload); })
        .addCase(ajouterTransactions.rejected, (state, action) => { state.error = action.payload || action.error.message; })

        // DELETE
        .addCase(supprimerTransactions.fulfilled, (state, action) => {
            state.listeTransaction = state.listeTransaction.filter(
                transaction => transaction.id !== String(action.payload)
            );
        })

        // UPDATE
        .addCase(modifierTransactions.fulfilled, (state, action) => {
            const index = state.listeTransaction.findIndex(t => String(t.id) === String(action.payload.id));
            if (index !== -1) {
                state.listeTransaction[index] = action.payload;
            }
        });
    }
});

export default sliceTransactions.reducer;
