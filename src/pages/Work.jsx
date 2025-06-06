import React from 'react'
import '../styles/work.css';

//components
//import PopupWindow from '../components/popup-projects.jsx';
//import ProjectsPort from "../components/Projects.jsx";
import FadeInWork from '../components/motion-work.jsx';
import SplitImage from '../components/splitImage.jsx';

//Images
import ImgTravel from '../assets/website-travel.avif';
import ImgWeb from '../assets/website-portfolio.avif';
import ImgShop from '../assets/website-shopping.avif';

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";

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
const filteredProjects = projectsData.filter(project =>
  search === "" || project.tags.some(tag =>
    tag.toLowerCase().includes(search.toLowerCase())
  )
);

//HTML
return (
  <div className="relative z-0 min-h-screen scroll-smooth">
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 transition-all duration-500 ease-in-out opacity-100 transform scale-100">
        {filteredProjects.map((project, index) => (
          <FadeInWork key={index} delay={index * 0.1}>
            <SplitImage src={project.img} alt={project.altTitle} pTitle={project.pTitle}>
              <h1 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h1>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm mb-2"
                  >
                    Link to repo
                  </a>
                  <div className="flex justify-center gap-3 text-2xl mb-2">
                    {project.tech.map((item, i) => (
                      <span key={i} style={{ color: item.color }}>
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 max-w-md mb-2">{project.info}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-black border border-[#d69c9c] hover:bg-[#d69c9c] hover:text-white px-2 py-1 rounded text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
            </SplitImage>
          </FadeInWork>
        ))}
    </div>
  </div>
);
}
export default Work;