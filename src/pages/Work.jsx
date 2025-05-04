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

const projectsData = [ {
  pTitle: "Travel Website, 2025",
  img: ImgTravel,
  title: "Travel Website",
  repo: "https://github.com/Elsalilly/bhromaon-website",
  tech: [
    {icon: faHtml5, color: "orange"},
    {icon: faCss3Alt, color: "blue"},
    {icon: faSass, color: "pink"},
  ],
  info: "The project was an 12hour assignment where we needed to fulfill certain objectives, such as a responsive design. Due to the short time, I learned how to plan and manage my time in a sufficient way. Also, it really put your skills to the test which showed where my strengths and weakness are. This assignment was both challenging and fun, and I managed to solve most of the objectives.",
  tags: ["#HTML", "#CSS", "#Sass", "#Website"]
},
{
  pTitle: "Designer Portfolio, 2025",
  img: ImgWeb,
  title: "Genesis Portfolio",
  repo: "https://github.com/Elsalilly/genesis-website",
  tech: [
    {icon: faHtml5, color: "orange"},
    {icon: faCss3Alt, color: "blue"},
    {icon: faSass, color: "pink"},
  ],
  info: "The project was an 12hour assignment where we needed to fulfill certain objectives, such as a responsive design. Due to the short time, I learned how to plan and manage my time in a sufficient way. Also, it really put your skills to the test which showed where my strengths and weakness are. This assignment was both challenging and fun, and I managed to solve most of the objectives.",
  tags: ["#HTML", "#CSS", "#Sass", "#Website"]
},
{
  pTitle: "Fashion Website, 2025",
  img: ImgShop,
  title: "Fashion Website",
  repo: "https://github.com/Elsalilly/responsive-navigation-fashion-site",
  tech: [
    {icon: faHtml5, color: "orange"},
    {icon: faCss3Alt, color: "blue"},
  ],
  info: "The project was an 12hour assignment where we needed to fulfill certain objectives, such as a responsive design. Due to the short time, I learned how to plan and manage my time in a sufficient way. Also, it really put your skills to the test which showed where my strengths and weakness are. This assignment was both challenging and fun, and I managed to solve most of the objectives.",
  tags: ["#HTML", "#CSS", "#Responsiveness", "#Website"]
},
]


const Work = ({search}) => {
//Javascript
const [showProjects, setShowProjects] = useState(false); //Set to false, projects hidden
console.log('Opening:', showProjects);

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

const filteredProjects = projectsData.filter(project =>
  search === "" || project.tags.some(tag =>
    tag.toLowerCase().includes(search.toLowerCase())
  )
);

//HTML
return (
  <div className="relative z-0 min-h-screen scroll-smooth">
    <div className="flex justify-center mb-8 mt-6">
        <button onClick={() => setShowProjects(!showProjects)}
            className="bg-transparent hover:bg-[#d69c9c] text-blakc mt-8 font-semibold hover:text-white py-2 px-4 border border-[#d69c9c] hover:border-transparent rounded transition-all duration-500 ease-in-out">
            {showProjects ? "Hide projects" : "View projects"}
        </button>
    </div>
  {/* A responsive grid layout - small screen one column, medium 2 columns etc*/}
  {showProjects && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 transition-all duration-500 ease-in-out opacity-100 transform scale-100">
      {filteredProjects.map((project, index) => (
        <ProjectsPort
          key={index}
          pTitle={project.pTitle}
          img={project.img}
          title={project.title}
          repo={project.repo}
          tech={
          <>
            {project.tech.map((item, i) => (
              <FontAwesomeIcon
              key={i}
              icon={item.icon}
              style={{
              marginRight: '10px',
              color: item.color,
              fontSize: '30px'
              }}
            />
            ))}
          </>
          }
          info={project.info}
          tags={project.tags}
          onClick={()=> openProjectPopup(project)}
        />
))}
  </div>
 )}
    {isOpen && selectedProject && (
      <PopupWindow 
        title={selectedProject.title} 
        info={selectedProject.info}
        tech={selectedProject.tech}
        repo={selectedProject.repo}
        tags={selectedProject.tags} 
        onClick={closePopup}
      />
    )}
  </div>
);
}
export default Work;