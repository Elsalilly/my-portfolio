import { useState, useEffect } from "react";
import React from "react";

const Typewrite = () => {
    const text = "Hey, I'm Elsa";
    const [displayed, setDisplayed] = useState(""); //holds the typed-out text
    const [index, setIndex] = useState(0); //tracks current character index

    useEffect(() => {
        if(index < text.length) {
            const interval = setInterval(() => {
                setDisplayed((pv) => pv + text.charAt(index));
                setIndex(index + 1);
        }, 100); //typing speed

        return () => clearInterval(interval);
        }
    },[index, text])
        
    return (
        <h1 className="text-5xl font-bold py-6 whitespace-nowrap">
            {displayed}
            <span className="animate-pulse">|</span>
        </h1>
    );
}

export default Typewrite;