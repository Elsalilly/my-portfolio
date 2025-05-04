import React from "react";
import '../styles/work.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopupWindow = ({
    title, repo, tech, info, tags, onClick
}) => {
    console.log(tech);
    return (
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <a 
                href={repo}
                className="link" 
                target="_blank"
                >
                Link to repo
            </a>
            <p className="tech">
                {Array.isArray(tech) && tech.map((item, index) => (
                    <span key={index} style={{color: item.color}} className="mr-2 px-2 py-1 rounded text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                    <FontAwesomeIcon icon={item.icon}/>
                    </span>
                ))}
            </p>
            <p className="info">{info}</p>
            <p className="tags">
                {tags?.map((tag, index) => (
                    <span key={index} className="text-[#d69c9c] mr-2 px-2 py-1 border-1 border-[#d69c9c] rounded text-xs sm:text-xs md:text-sm lg:text-base">
                    {tag}
                    </span>
                ))}
            </p>
            
            <button onClick={onClick} className="close-button">
                Close Window
            </button>
        </div>
    );
}
export default PopupWindow;