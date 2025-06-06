import React, { useState } from "react";

const SplitImage = ({ src, children, pTitle, altTitle }) => {
    const [isSplit, setIsSplit] = useState(false);

    const toggleSplit = () => setIsSplit(!isSplit);

    return (
        <div className="relative group w-full min-h-[20rem] sm:min-h-[18rem] lg:min-h-[25rem] group overflow-hidden cursor-pointer mb-4 rounded-lg" onClick={toggleSplit}>
            <div className={`absolute inset-0 z-10 transition-transform duration-700 ease-in-out 
                ${isSplit ? "-translate-x-full" : "translate-x-0"}`}
            >
                <picture>
                    <img 
                        src={src}
                        alt={altTitle}
                        loading="lazy" //waiting to render content
                        className="w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                    />
                </picture>
            </div>
            <div className={`absolute inset-0 z-10 transition-transform duration-700 ease-in-out 
                ${isSplit ? "-translate-x-full" : "translate-x-0"}`}
            >
                <picture>
                    <img 
                        src={src} 
                        alt={altTitle}
                        loading="lazy" 
                        className="w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                    />
                </picture>
            </div>

        {/* Hover overlay */}
        {!isSplit && ( 
            <div className="absolute inset-0 z-20 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-md z-40 cursor-pointer z-40 flex items-center justify-center text-center">
                <div className="text-center">
                    <h1 className="text-2xl text-white font-bold mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        {pTitle}
                    </h1>
                    <p className="text-sm text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100 duration-500 ease-out">
                        Click to learn more
                    </p>
                </div>
            </div>
        )}
            
        {/* Reveal content */}
        <div className={`absolute inset-0 px-6 py-4 z-30 flex flex-col items-center justify-center text-center bg-[#fefdf9] transition-opacity duration-700 overflow-y-auto
            ${isSplit ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                {children}
        </div>
    </div>
    );
};

export default SplitImage;