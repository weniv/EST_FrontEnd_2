import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseList() {

    const expenseList = useSelector((store) => {

        return store.EXPENSE.expenseList;
    });

    return (
        <ul>
            {expenseList.map((item, index) => {
                return <li key={index}>이름: {item.name} / 가격: {item.price}</li>
            })}
        </ul>
    )
}
