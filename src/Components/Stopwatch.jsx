import React, { useMemo, useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef(null);
    const formater = () => {
        // `0${Math.floor(time/3600)}`.slice(-2);alternate way
        let hours = Math.floor(time / 3600);
        hours = hours.length > 1 ? hours : '0' + hours;
        let mins = Math.floor((time % 3600) / 60).toString();
        mins = mins.length > 1 ? mins : '0' + mins;
        let seconds = Math.floor(time % 60).toString();
        seconds = seconds.length > 1 ? seconds : '0' + seconds;
        return `${hours}:${mins}:${seconds}`
    }
    const startTimer = () => {
        if (!isRunning) {
            timerRef.current = setInterval(() => {
                setTime((val) => val + 1);
            }, 1000);
            setIsRunning(true);
        }
    }
    const stopTimer = () => {
        // setIsRunning(false);
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false)
        }
    }
    const resetTimer = () => {
        if (isRunning) {
            setTime(0);
            clearInterval(timerRef.current);
            setIsRunning(false);
        } else {
            setTime(0);
        }
        // setIsRunning(false)
    }
    return (
        <div>
            <h1>{formater()}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Stopwatch