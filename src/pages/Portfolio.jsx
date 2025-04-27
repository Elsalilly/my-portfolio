import { useState } from 'react'
import React from 'react'

//Images
import ProjectsPort from "../components/Projects.jsx";
import ImgTravel from '../assets/website-travel.png';
import ImgWeb from '../assets/website-portfolio.png';
import ImgShop from '../assets/website-shopping.png';

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";


function Portfolio() {
//Javascript
const [showProjects, setShowProjects] = useState(false); //Set to false, projects hidden

//HTML
return (
  <div className="relative min-h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className="flex justify-center mb-8 mt-6">
        <button onClick={() => setShowProjects(!showProjects)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 mt-8 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all duration-500 ease-in-out">
            {showProjects ? "Hide projects" : "View projects"}
        </button>
    </div>
  {/* A responsive grid layout - small screen one column, medium 2 columns etc*/}
  {showProjects && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 transition-all duration-500 ease-in-out opacity-100 transform scale-100">
    <ProjectsPort
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
      description="The project was an 12hour assignment where we needed to fulfill certain objectives,
      such as a responsive design. Due to the short time, I learned how to plan and manage my time in a sufficient way.
      Also, it really put your skills to the test which showed where my strengths and weakness are.
      This assignment was both challenging and fun, and I managed to solve most of the objectives."
    />

    <ProjectsPort
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
      description="This is just a snippet from a project where I created a web portfolio, including 3 different pages: landing, contact and project.
      I learned how to create pages and sass, so I could create a cohesive site. As I was new to sass, I learned new ways
      working with structuring and reusing code in an effective way. The main challenge was learning sass and understanding its functions and potential."
    />

    <ProjectsPort
      img={ImgShop}
      title="Fashion Website"
      repo="https://github.com/Elsalilly/responsive-navigation-fashion-site"
      tech={
        <>
          <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '10px', color: 'orange', fontSize: '30px' }} />
          <FontAwesomeIcon icon={faCss3Alt} style={{ marginRight: '10px', color: 'blue', fontSize: '30px' }} />
        </>
      }
      description="This project was a mix of being creative and learning responsive design and navigation.
      So it's supposed to look like a fashion website where you can buy clothes, and if you're on a smaller
      screen a burger-menu will appear instead for instance. This meant that I needed to mix both functionality
      and design to create a user-friendly webpage."
    />
  </div>
  )}
  </div>
);
}
export default Portfolio;