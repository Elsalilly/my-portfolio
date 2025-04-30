import {Link} from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.css';


function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const BurgerMenu = () => {
    console.log('Hamburger button clicked');
    setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
    console.log('closed');
    setIsMenuOpen(false);
};

    return (
        <header className="md:sticky top-0 z-10">
            <div className="container mx-auto p-5 flex items-center justify-between">
                <p className="text-3xl font-bold text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    ELSA MERTALA
                </p>
                
                <nav className="hidden md:flex items-center space-x-6">
                      <Link to="/">Home</Link>
                      <Link to="/work">Work</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
                </nav>

                <button 
                    onClick={BurgerMenu}
                    className="md:hidden text-gray-600 hover:text-gray-800 focus:outline"
                    aria-label="Toggle mobile menu"
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
            {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex bg-[#F4F3EE] flex-col items-center justify-center">
                <button 
                    onClick={closeMenu}
                    className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 focus:outline-none"
                    aria-label="Close mobile menu"
                >
                    <FontAwesomeIcon icon={faXmark}/>
                </button>

                <nav className="flex flex-col items-center space-y-6 text-3xl">
                    <Link to="/" onClick={closeMenu} className="hover:bg-[#d8d7d0]">Home</Link>
                    <Link to="/work" onClick={closeMenu} className="hover:bg-[#d8d7d0]">Work</Link>
                    <Link to="/about" onClick={closeMenu} className="hover:bg-[#d8d7d0]">About</Link>
                    <Link to="/contact" onClick={closeMenu} className="hover:bg-[#d8d7d0]">Contact</Link>
                </nav>

            </div>
)}
        </header>
    );
}

export default Navbar;