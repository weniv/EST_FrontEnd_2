import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: []
    },
    reducers: {
        addExpenseAction: (currentSlice) => {
            console.log('add action!!');

            currentSlice.expenseList.push({ name: 'icecream', price: 300 });
        }
    }
});

const { addExpenseAction } = expenseSlice.actions;

export { expenseSlice, addExpenseAction };