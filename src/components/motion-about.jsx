import React, { useState, useEffect} from "react";

const Motion = () => {
    const words = ["Front-end", "UX Research", "Design", "Accessability"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);  
        }, 1500); //Change word every 1.5 seconds
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-block w-[180px] text-[#d69c9c] text-3xl font-semibold overflow-hidden">
                <span className="block transition-opacity duration-500 ease-in-out">
                    {words[index]}
                </span>
        </div>
    );
};

export default Motion;