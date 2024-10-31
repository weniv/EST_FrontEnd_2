import { useState } from "react";

export default function Stopwatch() {
    // 시작한 시간
    const [startTime, setStartTime] = useState(null);
    // 현재 시간 
    const [now, setNow] = useState(null);
    // 인터벌함수의 id
    const [intervalId, setIntervalId] = useState(null);


    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        setIntervalId(setInterval(() => {
            setNow(Date.now());
        }, 10));

    }

    function handleStop() {
        clearInterval(intervalId);
    }

    let secondsPassed = 0;
    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}
