import React from 'react'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { sale, soldout } from '../modules/stockReducer';

export default function StockCounter() {

    const { message } = useSelector((state) => {
        return { message: state.stockReducer.message }
    }, shallowEqual);

    const { stock } = useSelector((state) => ({
        stock: state.goodsReducer.stock,
    }), shallowEqual);

    const dispatch = useDispatch();


    useEffect(() => {
        if (stock <= 0) {
            dispatch(soldout());
        } else {
            dispatch(sale());
        }
    }, [stock]);


    return (
        <div>
            <strong>{message}</strong>
        </div>
    )
}
