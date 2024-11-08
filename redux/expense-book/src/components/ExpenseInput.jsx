import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../store/expense/expenseSlice';

export default function ExpenseInput() {

    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();

        dispatch(addExpenseAction());
    }

    return (
        <form onSubmit={submit}>
            <label style={{ display: 'block' }}>
                물건 이름:
                <input type="text" placeholder='예시: coffee' />
            </label>

            <label>
                물건 가격:
                <input type="number" placeholder='예시: 1000' />
            </label>

            <button type='submit'>지출 등록</button>
        </form>
    )
}
