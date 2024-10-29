import React from 'react'

const currencyConfig = {
    USD: { locale: 'en-US', currency: 'USD', symbol: '$' },
    EUR: { locale: 'de-DE', currency: 'EUR', symbol: '€' },
    GBP: { locale: 'en-GB', currency: 'GBP', symbol: '£' },
    JPY: { locale: 'ja-JP', currency: 'JPY', symbol: '¥' },
    KRW: { locale: 'ko-KR', currency: 'KRW', symbol: '₩' },
    CNY: { locale: 'zh-CN', currency: 'CNY', symbol: '¥' },
};


const formatPrice = (price, currencyCode) => {
    const config = currencyConfig[currencyCode] || currencyConfig.USD;

    return new Intl.NumberFormat(config.locale, {
        style: 'currency',
        currency: config.currency,
        maximumFractionDigits: 2
    }).format(price);
};



export default function PriceFormatter({ price, currencyCode }) {

    const formattedPrice = formatPrice(price, currencyCode);

    return (
        <data value={price}>{formattedPrice}</data>
    )
}
