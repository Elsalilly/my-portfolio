import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <header className="bg-yellow-100 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <ul className="flex space-x-4">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/work">Work</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <p className="text-2xl font-bold ml-14 mt-2 md:mt-0 md-ml-6">ELSA MERTALA</p>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;