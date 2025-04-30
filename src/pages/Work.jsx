import { useState } from 'react'
import React from 'react'
import '../styles/work.css';

//components
import PopupWindow from '../components/popup-projects.jsx';
import ProjectsPort from "../components/Projects.jsx";

//Images
import ImgTravel from '../assets/website-travel.png';
import ImgWeb from '../assets/website-portfolio.png';
import ImgShop from '../assets/website-shopping.png';

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";


function Work() {
//Javascript
const [showProjects, setShowProjects] = useState(false); //Set to false, projects hidden

const [selectedProject, setSelectedProject] = useState(null);

const [isOpen, setIsOpen] = useState(false);

const openProjectPopup = (project) => {
  console.log('Opening:', project);
    setSelectedProject(project);
    setIsOpen(true);
};

const closePopup = () => {
  setSelectedProject(null);
  setIsOpen(false);
};

//HTML
return (
  <div className="relative z-0 min-h-screen">
    <div className="flex justify-center mb-8 mt-6">
        <button onClick={() => setShowProjects(!showProjects)}
            className="bg-transparent hover:bg-[#d69c9c] text-blakc mt-8 font-semibold hover:text-white py-2 px-4 border border-[#d69c9c] hover:border-transparent rounded transition-all duration-500 ease-in-out">
            {showProjects ? "Hide projects" : "View projects"}
        </button>
    </div>
  {/* A responsive grid layout - small screen one column, medium 2 columns etc*/}
  {showProjects && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 transition-all duration-500 ease-in-out opacity-100 transform scale-100">
    <ProjectsPort
      pTitle="Travel Website, 2025"
      img={ImgTravel}
      title="Travel Website"
      repo="https://github.com/Elsalilly/bhromaon-website"
      tech={
        <>
          <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '10px', color: 'orange', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faCss3Alt} style={{ marginRight: '10px', color: 'blue', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faSass} style={{ marginRight: '10px', color: 'pink', fontSize: '30px' }} />
        </>
      }
      info="The project was an 12hour assignment where we needed to fulfill certain objectives,
      such as a responsive design. Due to the short time, I learned how to plan and manage my time in a sufficient way.
      Also, it really put your skills to the test which showed where my strengths and weakness are.
      This assignment was both challenging and fun, and I managed to solve most of the objectives."
    onProjectClick={openProjectPopup}
    />

    <ProjectsPort
      pTitle="Genesis Portfolio, 2025"
      img={ImgWeb}
      altTitle="Screenshoot from Genesis Portfolio"
      title="Genesis Portfolio"
      repo="https://github.com/Elsalilly/genesis-website"
      tech={
        <>
          <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '10px', color: 'orange', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faCss3Alt} style={{ marginRight: '10px', color: 'blue', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faSass} style={{ marginRight: '10px', color: 'pink', fontSize: '30px' }} />
        </>
      }
      info="This is just a snippet from a project where I created a web portfolio, including 3 different pages: landing, contact and project.
      I learned how to create pages and sass, so I could create a cohesive site. As I was new to sass, I learned new ways
      working with structuring and reusing code in an effective way. The main challenge was learning sass and understanding its functions and potential."
      onProjectClick={openProjectPopup}
    />

    <ProjectsPort
      pTitle="Fashion Website, 2025"
      img={ImgShop}
      title="Fashion Website"
      repo="https://github.com/Elsalilly/responsive-navigation-fashion-site"
      tech={
        <>
          <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '10px', color: 'orange', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faCss3Alt} style={{ marginRight: '10px', color: 'blue', fontSize: '30px' }} />
        </>
      }
      info="This project was a mix of being creative and learning responsive design and navigation.
      So it's supposed to look like a fashion website where you can buy clothes, and if you're on a smaller
      screen a burger-menu will appear instead for instance. This meant that I needed to mix both functionality
      and design to create a user-friendly webpage."
      onProjectClick={openProjectPopup}
    />
  </div>
  )}
    {isOpen && selectedProject && (
      <PopupWindow 
      title={selectedProject.title} 
      info={selectedProject.info}
      tech={selectedProject.tech}
      repo={selectedProject.repo} 
      onClick={closePopup}
      />
    )}
  </div>
);
}
export default Work;