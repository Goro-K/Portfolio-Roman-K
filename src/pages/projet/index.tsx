import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import ky from "ky";
import Error from "../error/index";
import { useEffect, useState } from "react";
import "../../index.css"
import Footer from "../../components/footer";
import Home from "../home";
import { Project } from "../../../types";
import Header from "../../components/header/index";
import { API_URL } from "../../../config";

function Projet(): JSX.Element {
  // Variables d'état pour les données de projet
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch de l'api avec les différents projets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ky.get(`${API_URL}/project`);
        const project: Project[] = await response.json() as Project[];
        setProjectData(project);
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    };
    fetchData();
  }, []);


  // On recupére l'id dans le lien et le compare à l'id du projet
  const params = useParams();

  const project = projectData.length > 0 ? projectData.find((project) => project.id === params.id) : null;
  if (!project) {
    return <Error />;
  }

  if(loading) {
    return <Home />
  }

  return project ? (
    <>
    <Header />
    <div className="md:min-h-screen px-8 text-slate-900 dark:text-gray-300 bg-gray-200 dark:bg-slate-900 transition duration-500 py-5">
      <NavLink to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />À Propos
      </NavLink>
      <div className="md:flex-none">
        <div className=" mt-2 md:mt-0 w-3/4 text-center md:w-64 md:float-right mx-10">
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
      <div className="h-1/3">
      <div className="my-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{project.description}</p>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-bold">Objectif</h2>
        <div>
          {project.objectifs.map((objectif, index) => (
            <p key={`objectif ${index + 1}`}>{objectif}</p>
          ))}
        </div>
      </div>
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-bold my-2">Image du site</h2>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView="auto"
            slidesPerGroup={1}
            grabCursor={true}
            className="swiper"
          >
          {project.imagesPc.map((image, index) => (
            <SwiperSlide key={`Site web pages ${index + 1}`} className="swiper-project">
            <img
              src={image}
              alt=""
              className="h-60 md:h-80 lg:h-96 w-full object-contain"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  </>
  ) : (
    <Home />
  );
}

export default Projet;
