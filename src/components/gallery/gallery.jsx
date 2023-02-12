import { useState, useEffect} from "react";
import PropTypes from "prop-types";
import ky from "ky";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

function Gallery() {
  // Variables d'état pour les données de projet
  const [projectData, setProjectData] = useState([]);
  const [technologieData, setTechnologieData] = useState([]);
  const [experienceData, setExperienceData] = useState([])
  // Fetch de l'api avec les différents projets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, technologie, experience] = await Promise.all([
          ky.get("http://localhost:5000/api/project").json(),
          ky.get("http://localhost:5000/api/technologie").json(),
          ky.get("http://localhost:5000/api/experience").json(),
        ]);
        setProjectData(project);
        setTechnologieData(technologie);
        setExperienceData(experience);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Gestion du Clic sur une card
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false); // Pour que l'animate-pulse de la card experience ne réagisse pas si je clique sur une card technologie
  const [data, setIsData] = useState(null)

  function handleData(data) {
    setIsData(data.name);
    setIsClicked(!isClicked);
    setIsClicked2(!isClicked2);
  }

  //Gestion de Intersection Observer

  const onIntersect = (entry) => {};

  const cardIntersect = useIntersectionObserver({
    onIntersect,
  });
  return (
    <div>
      <div>
        <div>
          <h2 className="ml-8 my-5 text-slate-800 dark:text-slate-200 text-xl font-bold">
            Projets
          </h2>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView="auto"
            slidesPerGroup={1}
            grabCursor={true}
            navigation={{
              clickable: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="swiper"
          >
            {projectData.map((projet, index) => (
              <SwiperSlide key={`projet n°${index + 1}`} className="slide-projet">
                <div>
                  <div ref={cardIntersect} className="hover:animate-pulse">
                    <NavLink to={`/projet/${projet.id}`} aria-label={`${projet.title}`}>
                      <div>
                        <img
                          src={projet.logo}
                          alt=""
                          className="lg:w-400px aspect-square rounded-2xl lg:h-400px md:h-80 md:w-80"
                        />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="ml-8 my-5 text-slate-800 dark:text-slate-200 text-xl font-bold">
          Compétences
        </h2>
        <div className="competence">
        {technologieData.map((technologie, index) => (
          technologie.name === data && isClicked ? (
        <div key={`technologie n°${index + 1}`}>
          <div
            className="overlay"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto mb-2 pr-4 z-50 rounded-lg dark:text-slate-200 sm:w-96">
              <div className="flex items-center justify-between m-2">
                <h2 className="text-4xl font-bold"> {technologie.name} </h2>
              </div>
              <div className="m-4 flex justify-between items-center">
                <div>
                  <p> Utilisé dans : </p>
                  <ul>
                    {technologie.usedFor.map((used, index) => (
                      <li key={`utilisé - ${index}`}>{used}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img src={technologie.image} alt="" className="h-20" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text">Connaissance de la technologie : </p>
                <ul>
                  {technologie.knowledge.map((knowledge, index) => (
                    <li key={`connaissance - ${index}`}>{knowledge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null))}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            slidesPerView= "auto"
            spaceBetween= {10}
            slidesPerGroup= {3}
            grabCursor={true}
            navigation={{
              prevEl: ".swiper-previous-button",
              nextEl: ".swiper-next-button",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="swiper z-20 h-full"
          >
            {technologieData.map((technologie, index) => (
              <SwiperSlide key={`technologie n°${index + 1}`} className="slide-tech">
      <div
        className={`${
          technologie.name === data && isClicked
            ? "animate-pulse text-center z-10 relative h-40 w-40 snap-start cursor-pointer"
            : "hover:animate-pulse text-center z-20 relative h-40 w-40 snap-start cursor-pointer"
        }`}
        onClick={() => handleData(technologie)}
        ref={cardIntersect}
      >
        <div>
          <img src={technologie.image} alt="" className="h-40 w-40"/>
        </div>
      </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="ml-8 my-5 text-slate-800 dark:text-slate-200 text-xl font-bold">
          Experience
        </h2>
        <div>
        {experienceData.map( (experience, index) => (
        experience.name === data && isClicked2 ? (
          <div className="overlay" onClick={() => setIsClicked2(!isClicked2)} key={`technologie n°${index + 1}`}>
            <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 sm:w-96">
              <div className="flex items-center justify-between m-4">
                <h2 className="text-2xl font-bold"> {experience.name} </h2>
              </div>
              <div className="ml-4 mb-2 flex justify-between items-center">
                <div>
                  <p className="text-xl">{experience.durée}</p>
                </div>
              </div>
              <div className="px-4">
                <p className="mb-4">
                  {experience.méthode}
                </p>
                <p>
                  {experience.tech_learnt}
                </p>
              </div>
            </div>
          </div>
        ) : null
        ))
      }
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={2}
            grabCursor={true}
            navigation={{
              prevEl: ".swiper-previous-button",
              nextEl: ".swiper-next-button",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="swiper"
          >
            
            {experienceData.map((experience, index) => (
              <SwiperSlide key={`experience n°${index + 1}`}>
        <div
          className={`${
            experience.name === data && isClicked2
              ? "animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer"
              : "hover:animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer card"
          }`}
          onClick={() => handleData(experience)}
          ref={cardIntersect}
        >
          <img
            src={experience.image}
            alt=""
            className="w-full aspect-square rounded-2xl"
          />
        </div>
          </SwiperSlide>))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  index: PropTypes.number,
};

Gallery.defaultProps = {
  index: null,
};

export default Gallery;