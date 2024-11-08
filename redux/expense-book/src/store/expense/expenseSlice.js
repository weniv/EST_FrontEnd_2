import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [],
        income: 0
    },
    reducers: {
        addExpenseAction: (currentSlice, action) => {
            console.log('add action!!');

            // currentSlice.expenseList.push({ name: 'icecream', price: 300 });
            currentSlice.expenseList.push(action.payload);
        },
        setIncomeAction: (currentSlice, action) => {
            currentSlice.income = action.payload;
        }
    }
});

const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

export { expenseSlice, addExpenseAction, setIncomeAction };