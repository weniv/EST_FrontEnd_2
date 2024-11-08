import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addNumber, substractNumber } from '../modules/goodsReducer';
import { useEffect } from 'react';
import { useRef } from 'react';


// render 함수
export default function GoodsCounter() {

    const { stock, goods } = useSelector((state) => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods,
    }), shallowEqual);


    const dispatch = useDispatch();

    const onAddNumber = () => dispatch(addNumber());
    const onSubstractNumber = () => dispatch(substractNumber());

    const btnPlus = useRef();
    const btnMinus = useRef();

    // useEffect(() => {
    //     if (stock <= 0) {
    //         btnPlus.current.disabled = true;
    //     } else {
    //         btnPlus.current.disabled = false;
    //     }
    //     if (goods <= 0) {
    //         btnMinus.current.disabled = true;
    //     } else {
    //         btnMinus.current.disabled = false;
    //     }
    // }, [stock, goods]);


    return (
        <div>
            <h2>딥러닝 개발자 무릎담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type='button' disabled={goods <= 0 ? true : false} onClick={onSubstractNumber} ref={btnMinus}>MINUS</button>
                <span>{goods}</span>
                <button type='button' disabled={stock <= 0 ? true : false} onClick={onAddNumber} ref={btnPlus}>PLUS</button>
            </div>
            <div>총 수량 <strong>{goods}</strong></div>
            <div><strong>{goods * 17500}</strong>원</div>
            <div>재고<strong>{stock}</strong></div>
        </div>
    )
}
