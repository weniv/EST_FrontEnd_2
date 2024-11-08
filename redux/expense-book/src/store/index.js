import { configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expenseSlice';

console.log('expenseSlice: ', expenseSlice);

const store = configureStore(
    {
        reducer: {
            EXPENSE: expenseSlice.reducer
        }
    }
);

export default store;