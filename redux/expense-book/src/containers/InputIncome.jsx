import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIncomeAction } from '../store/expense/expenseSlice';

export default function InputIncome() {

    const dispatch = useDispatch();

    const income = useSelector((store) => {
        return store.EXPENSE.income;
    });

    const setIncome = (event) => {
        dispatch(setIncomeAction(Number(event.target.value)));
    }


    return (
        <label>
            나의 수익:
            <input type="number" onChange={setIncome} value={income} />
        </label>
    )
}
