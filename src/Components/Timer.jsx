import React, { useEffect, useRef, useState } from 'react'
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1)
            console.log("render")
        }, [1000])
        return () => clearInterval(intervalRef.current);
    }, [])

    return (
        <div>
            <p>Seconds:{seconds}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        </div>
    )
}

export default Timer