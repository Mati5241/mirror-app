import React, {useEffect, useState} from "react";
import {ShowMirror} from "./ShowMirror";

import './Mirror.css'


// @ts-ignore
export const Mirror = props => {


    const d = new Date();
    const dayToFix = (d.toLocaleDateString('en-US'));
    const day = dayToFix.split('/').join('.')

    const hour = d.getHours()
    const minute = d.getMinutes()
    const minutesAfterMidnight = hour * 60 + minute

    const [data, setData] = useState([]);


    const refresh: any = async () => {
        const array: any[] = [];

        const res = await fetch(`http://localhost:3001/date/${day}`)

        const {data} = await res.json();

        for (let i = 0; i < data.length; i++) {
            const minutesAfterMidnightTaskEndArray = data[i].end.split(':');
            const minutesAfterMidnightTaskEnd = Number(minutesAfterMidnightTaskEndArray[0] * 60 + Number(minutesAfterMidnightTaskEndArray[1]));

            const className = (minutesAfterMidnight >= minutesAfterMidnightTaskEnd) ? 'outdated-task' : 'current-task'
            data[i].className = className
                array.push([data[i].id, data[i].start, data[i].end, data[i].title, data[i].className]);
        }

        // @ts-ignore
        setData(array);
    };


    useEffect(() => {

        refresh();

    }, [data])

    return <ShowMirror data={data}/>

}
