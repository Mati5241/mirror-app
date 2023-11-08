import { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        date: new Date().toDateString(),
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                minutes: date.getMinutes(),
                hours: date.getHours(),
                date: date.toDateString()
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    // @ts-ignore
    const convertToTwoDigit = (number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <div className="clock">
            <span>{convertToTwoDigit(time.hours)}:</span>
            <span>{convertToTwoDigit(time.minutes)}</span>

                {/*<p>{time.date}</p>*/}
        </div>
    );
}

