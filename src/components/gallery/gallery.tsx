import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { Link } from "react-router-dom";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project, Technologie, Experience } from "../../../types";

interface GalleryProps {
  projectData: Project[];
  technologieData: Technologie[];
  experienceData: Experience[];
  searchTerm: string;
}

const Gallery: React.FC<GalleryProps> = ({
  projectData,
  experienceData,
  technologieData,
  searchTerm,
}) => {
  // Gestion du Clic sur une card
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false); // Pour que l'animate-pulse de la card experience ne réagisse pas si je clique sur une card technologie
  
  /* Ici, nous avons utilisé l'union de types (|) pour spécifier que data peut être soit un objet Technologie, 
  soit un objet Experience, soit null. */
  const [data, setIsData] = useState<Technologie | Experience | null>(null); 

  function handleData(data: Technologie | Experience) {
    setIsData(data);
    setIsClicked(!isClicked);
    setIsClicked2(!isClicked2);
  }

  return (
    <div className=" min-h-screen animate-appear bg-lightGallery dark:bg-darkGallery py-10 text-darkHeadline pl-4 sm:pl-10">
      <div>
        {searchTerm ? null : (
          <h2 className="mb-6 text-xl font-bold p-1 rounded-md bg-lightBtnGallery dark:bg-darkBtnGallery w-max">
            Projets
          </h2>
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView="auto"
          slidesPerGroup={1}
          grabCursor={true}
          className="swiper"
        >
          {projectData
            .filter((value) => {
              return value.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((projet, index) => (
              <SwiperSlide
                key={`projet n°${index + 1}`}
                className="slide-projet"
              >
                <>
                  <div className="hover:animate-pulse">
                    <Link
                      to={`/projet/${projet._id}`}
                      aria-label={`${projet.title}`}
                      state={{ projectData: projet }}
                    >
                      <img
                        src={projet.logo}
                        alt=""
                        className="rounded-2xl sm:h-80 sm:w-80 h-60 w-60 my-3 mb-6"
                      />
                    </Link>
                  </div>
                </>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {searchTerm ? null : (
        <h2 className="mb-10 text-xl font-bold p-1 rounded-md bg-lightBtnGallery dark:bg-darkBtnGallery w-max">
          Compétences
        </h2>
      )}
      <div className="">
        {technologieData.map((technologie, index) =>
          technologie.name === (data?.name ?? "") && isClicked ? (
            <div key={`technologie n°${index + 1}`}>
              <div className="overlay" onClick={() => setIsClicked(!isClicked)}>
                <div className="bg-lightGallery text-lightHeadline dark:bg-darkGallery dark:text-darkHeadline w-72 h-auto mb-2 pr-4 z-50 rounded-lg sm:w-96 pb-4 pt-1 pl-1">
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
                      <img
                        src={technologie.image}
                        alt=""
                        className="h-20 my-3"
                      />
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
          ) : null
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          slidesPerView="auto"
          spaceBetween={10}
          slidesPerGroup={2}
          grabCursor={true}
          className="swiper z-20 h-full"
        >
          {technologieData
            .filter((value) => {
              return value.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((technologie, index) => (
              <SwiperSlide
                key={`technologie n°${index + 1}`}
                className="slide-tech"
              >
                <div
                  className={`${
                    /* opérateur optionnel (?.) pour accéder à la propriété id de l'objet data dans le premier bloc, 
                    et à la propriété name de l'objet data dans le deuxième bloc, qui peuvent être null. Si data est null, la condition entière renverra false. */
                    technologie.name === (data?.name ?? null) && isClicked
                      ? "animate-pulse text-center z-10 relative h-40 w-40 snap-start cursor-pointer"
                      : "hover:animate-pulse text-center z-20 relative h-40 w-40 snap-start cursor-pointer"
                  }`}
                  onClick={() => handleData(technologie)}
                >
                  <div>
                    <img
                      src={technologie.image}
                      alt=""
                      className="h-40 w-40 mb-6"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {searchTerm ? null : (
        <h2 className="mb-6 mt-5 text-xl font-bold p-1 rounded-md bg-lightBtnGallery dark:bg-darkBtnGallery w-max">
          Experience
        </h2>
      )}
      <div>
        {experienceData.map((experience, index) =>
          experience.name === data?.name && isClicked2 ? (
            <div
              className="overlay"
              onClick={() => setIsClicked2(!isClicked2)}
              key={`technologie n°${index + 1}`}
            >
              <div className="bg-lightGallery text-lightHeadline dark:bg-darkGallery dark:text-darkHeadline w-72 h-auto pb-2 pr-1 z-50 rounded-lg sm:w-96">
                <div className="flex items-center justify-between m-4">
                  <h2 className="text-2xl font-bold"> {experience.name} </h2>
                </div>
                <div className="ml-4 mb-2 flex justify-between items-center">
                  <div>
                    <p className="text-xl">{experience.durée}</p>
                  </div>
                </div>
                <div className="px-4">
                  <p className="mb-4">{experience.méthode}</p>
                  <p>{experience.tech_learnt}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={2}
          grabCursor={true}
          className="swiper"
        >
          {experienceData
            .filter((value) => {
              return value.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((experience, index) => (
              <SwiperSlide key={`experience n°${index + 1}`}>
                <div
                  className={`${
                    experience.name === data?.name && isClicked2
                      ? "animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer"
                      : "hover:animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer"
                  }`}
                  onClick={() => handleData(experience)}
                >
                  <img
                    src={experience.image}
                    alt=""
                    className="w-full aspect-square rounded-2xl my-3"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Gallery;
