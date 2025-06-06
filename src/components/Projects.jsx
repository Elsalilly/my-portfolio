import '../styles/projects.css';
import '../styles/work.css';


const ProjectsPort = ({pTitle, altTitle, img, onClick}) => {
//Javascript

//HTML
console.log("Img;" ,img, "pTitle", pTitle);
return (
    <div className="relative group w-full h-full sm:h-80 cursor-pointer overflow-hidden rounded-md mb-4" onClick={onClick}>
        <img className="w-full h-full object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105" 
            src={img}
            alt={altTitle} 
        />
        {/*Project details hidden by default*/}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-md z-40 flex items-center justify-center text-center">
            <div className="text-white">
                <h1 className="text-2xl text-white font-bold mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {pTitle}
                </h1>
                <p className="text-sm text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-100 duration-500 ease-out">
                    Click to learn more
                </p>
            </div>
        </div>
    </div>
   );
}

export default ProjectsPort;