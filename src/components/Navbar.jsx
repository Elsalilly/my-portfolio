import {Link} from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.css';


const Navbar = ({search, setSearch}) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
}

const BurgerMenu = () => {
    console.log('Hamburger button clicked');
    setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
    console.log('closed');
    setIsMenuOpen(false);
};


    return (
        <header className="md:flex top-0 z-10">
            <div className="container mx-auto p-5 px-10 flex items-center justify-between">
                <p className="title text-3xl font-bold text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    ELSA MERTALA
                </p>
                <nav className="hidden md:flex items-center space-x-6">
                      <Link to="/" className="hover:underline">Home</Link>
                      <Link to="/work" className="hover:underline">Work</Link>
                      {/*<Link to="/about" className="hover:underline">About</Link>*/}
                      <Link to="/contact" className="hover:underline">Contact</Link>
                </nav>
                <div className="hidden md:flex items-center text-center md:absolute top-3 right-7">
                    <input
                        type="text"
                        id="search"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-1/1"
                        placeholder="Search..."
                        value={search}
                        onChange={handleChange}
                    />
                </div>
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

                <nav className="flex flex-col items-center space-y-6">
                    <Link to="/" onClick={closeMenu} className="hover:bg-[#d8d7d0] text-3xl">Home</Link>
                    <Link to="/work" onClick={closeMenu} className="hover:bg-[#d8d7d0] text-3xl">Work</Link>
                    {/*<Link to="/about" onClick={closeMenu} className="hover:bg-[#d8d7d0] text-3xl">About</Link>*/}
                    <Link to="/contact" onClick={closeMenu} className="hover:bg-[#d8d7d0] text-3xl">Contact</Link>
                </nav>
            </div>
)}
        </header>
    );
}

export default Navbar;