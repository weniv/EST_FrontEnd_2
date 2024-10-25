import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}
