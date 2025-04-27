import { useState } from 'react'
import './App.css'

//Telling React where to look for all routes, and store it
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/NavBar.jsx';




function App() {
return (
  <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </>
);
}
export default App;