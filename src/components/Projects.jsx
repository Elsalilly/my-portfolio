import '../styles/projects.css';


function ProjectsPort(props) {
//Javascript

const handleImageClick = () => {
    if (props.onProjectClick) {
        props.onProjectClick({
            title: props.title,
            tech: props.tech,
            repo: props.repo,
            info: props.info,
            name: props.pTitle,
        });
    }
}
/*
const [popupWork, setPopupWork] = useState({
  title: "Hello",
  tech: "Hello",
  info: "Hello",
  repo: "Github"
});

const [isOpen, setIsOpen] = useState(false);

const closePopup = () => {
  setIsOpen(false);
};

const handleImageClick = (project) => {
    setPopupWork(project);
    setIsOpen(true);
};
*/
//HTML
return (
    <div className="relative group w-full h-full cursor-pointer" onClick={handleImageClick}>
        <img className="w-full h-80 object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105" 
            src={props.img}
            alt={props.altTitle}
            
        />
        {/*Project details hidden by default*/}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-md">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4  group-hover:opacity-100 transition-opacity duration-300 ">
            <div className="text-center text-white">
           <h1 className="text-2xl text-white font-bold mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">{props.pTitle}</h1>
           <p className="text-sm text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100 duration-500 ease-out">Click to learn more</p>
        </div>
        </div>
        </div>
    </div>
   );
}

export default ProjectsPort;


/* 
            <h1 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{props.title}</h1>
            <a 
                href={props.repo}
                className="text-emerald-700 font-bold hover:underline mb-2" 
                target="_blank"
                >
                Link to repo
            </a>

            <h3 className="text-sm text-gray-600 mb-4">{props.tech}</h3>
            <p className="text-gray-700 text-sm">{props.description}</p>
            */