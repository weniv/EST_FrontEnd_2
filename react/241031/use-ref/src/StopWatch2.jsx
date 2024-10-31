import { useState, useRef } from "react";

export default function Stopwatch2() {
    // 시작한 시간
    // const [startTime, setStartTime] = useState(null);
    const startTime = useRef(0);

    // 인터벌함수의 id
    // const [intervalId, setIntervalId] = useState(null);
    const intervalId = useRef(null);

    // 현재 시간 
    // const [now, setNow] = useState(null);

    // 경과 시간
    const [secondsPassed, setSecondsPassed] = useState(0);

    const [isDisabled, setIsDisabled] = useState(false);
    // const startBtn = useRef(null);

    function handleStart() {
        // setStartTime(Date.now());
        // setNow(Date.now());

        // setIntervalId(setInterval(() => {
        //     setNow(Date.now());
        // }, 10));

        startTime.current = Date.now() - secondsPassed * 1000;

        intervalId.current = setInterval(() => {
            setSecondsPassed((Date.now() - startTime.current) / 1000);
        }, 10);

        // isDisabled.current = true;
        setIsDisabled(true);
    }

    function handleStop() {
        clearInterval(intervalId.current);
        // isDisabled.current = false;
        setIsDisabled(false);
    }

    // let secondsPassed = 0;
    // if (startTime !== null && now !== null) {
    //     secondsPassed = (now - startTime) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
    // }

    function handleReset() {
        setSecondsPassed(0);
        clearInterval(intervalId.current);
        setIsDisabled(false);
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
