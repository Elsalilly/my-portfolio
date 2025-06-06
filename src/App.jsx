import { useState } from 'react'
import '../src/styles/App.css';

//Telling React where to look for all routes, and store it
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/NavBar.jsx';
import Footer from './components/footer.jsx';



function App() {
  const [search, setSearch] = useState("");
return (
  <>
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work search={search}/>} />
        {/*<Route path="/about" element={<About/>} />*/}
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);
}
export default App;