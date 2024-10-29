import React from 'react';
import PriceFormatter from './Components/PriceFormatter';

export default function App3() {
    return (
        <div>App3

            <PriceFormatter price={1000} currencyCode="USD" />
            <PriceFormatter price={1000} currencyCode="KRW" />
            <PriceFormatter price={1000} currencyCode="GBP" />
            <PriceFormatter price={1000} currencyCode="JPY" />
        </div>
    )
}
