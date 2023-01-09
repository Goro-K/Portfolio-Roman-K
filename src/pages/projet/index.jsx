import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import Projects from "../../projects.json";
import Error from "../error/index";

function Projet() {
  const params = useParams();
  const project = Projects.find((project) => project.id === params.id);

  return project ? (
    <div className="px-8 text-slate-900 dark:text-gray-300 bg-gray-200 dark:bg-slate-900 transition duration-500 py-5">
      <NavLink to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />À Propos
      </NavLink>
      <div className="md:flex-none">
        <div className=" mt-2 md:mt-0 w-3/4 text-center md:w-64 md:float-right mx-10 mb-6">
          <img
            src={project.logo}
            alt=""
            className="md:w-full rounded-full drop-shadow-xl mr-0"
          />
          <h4 className="my-2 text-l font-bold text-center">Technologies</h4>
          <div className="flex justify-center md:w-64">
            {project.technologies.map((technologie, index) => (
              <img
                src={technologie}
                alt=""
                className=" w-10 h-10 rounded-xl drop-shadow-lg mx-1"
                key={`technologie ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="my-6 flex items-center">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          {project.video ? (
            <a
              href={project.video}
              target="blank"
              className=" text-center ml-4 rounded-3xl text-white bg-blue-500 dark:bg-red-500 p-2"
            >
              Video du projet
            </a>
          ) : null}
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{project.description}</p>
      </div>
      <div className="my-6">
        <h2 className="text-xl font-bold">Objectif</h2>
        <div>
          {project.objectifs.map((objectif, index) => (
            <p key={`objectif ${index + 1}`}>{objectif}</p>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold my-2">Image du site</h2>
        <div className="bg-slate-500 dark:bg-slate-400 grid grid-cols-2 gap-4 w-full rounded-xl p-2">
          {project.imagesPc.map((image, index) => (
            <img
              src={image}
              alt=""
              className="rounded-xl h-full"
              key={`Site web pages ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Error />
  );
}

export default Projet;
