import React, {useEffect, useState} from "react";


export const MirrorScript = () => {

    const sentences = [

        "Magic mirror demo for MegaK",
        "Add some tasks into schedule-app",
        "You can see random sentences here until you enter your tasks",
        "Hi Kuba!",

    ];

    const [oneSentence, setOneSentence] = useState('');

    useEffect(() => {
        const drawSentence = () => {
            setOneSentence(sentences[Math.floor((Math.random() * sentences.length))]);
        }

        drawSentence()
        setInterval(drawSentence, 1000 * 3);
    }, [])

    return <p className="mirror-show-script">{oneSentence}</p>

}
