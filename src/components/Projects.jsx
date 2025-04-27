import '../styles/projects.css';

function ProjectsPort(props) {
//Javascript

//HTML
return (
    <div className="relative group">
        <img className="w-400 h-100 object-cover rounded-md mb-4" 
            src={props.img}
            alt={props.altTitle}
        />
        {/*Project details hidden by default*/}
        <div className="absolute inset-0 bg-white bg-gradient-to-tl from-indigo-200 via-red-200-to-yellow-100 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 rounded-lg border-4 border-double">
            <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
            <a 
                href={props.repo}
                className="text-emerald-700 font-bold hover:underline mb-2" 
                target="_blank"
                >
                Link to repo
            </a>

            <h3 className="text-sm text-gray-600 mb-4">{props.tech}</h3>
            <p className="text-gray-700 text-sm">{props.description}</p>
        </div>
    </div>
   );
}

export default ProjectsPort;