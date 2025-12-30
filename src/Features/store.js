import {configureStore} from '@reduxjs/toolkit';
import  sliceUsers  from './Slice';
import  sliceTransactions  from './SliceTransaction';
import sliceEvents  from './SliceEvents';
export default configureStore({
    reducer:{
        users:sliceUsers,
        transactions:sliceTransactions,
        Events: sliceEvents
    }
});