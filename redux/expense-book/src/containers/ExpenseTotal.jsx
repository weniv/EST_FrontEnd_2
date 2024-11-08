import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {

    const income = useSelector((store) => {
        return store.EXPENSE.income;
    });

    const expenseList = useSelector((store) => {
        return store.EXPENSE.expenseList;
    });

    const totalExpense = expenseList.reduce((total, expense) => {
        return total + expense.price;
    }, 0);


    return (
        <>
            <p>총 지출: {totalExpense}</p>
            <p>계좌 잔고: {income - totalExpense}</p>
        </>
    )
}
