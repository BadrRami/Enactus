import {configureStore} from '@reduxjs/toolkit';
import  sliceUsers  from './Slice';
import  sliceTransactions  from './SliceTransaction';
export default configureStore({
    reducer:{
        users:sliceUsers,
        transactions:sliceTransactions
    }
});