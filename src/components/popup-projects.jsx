import React from "react";
import '../styles/work.css';

const PopupWindow = ({
    title, repo, tech, info, onClick
}) => {
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
            <h3 className="tech">{tech}</h3>
            <p className="info">{info}</p>

            <button onClick={onClick} className="close-button">
                Close Window
            </button>
        </div>
    );
}
export default PopupWindow;