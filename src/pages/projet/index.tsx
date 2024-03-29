import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "../../index.css"
import Footer from "../../components/footer";
import Header from "../../components/header/index";
import Error from "../error";

function Projet(): JSX.Element {
  const location = useLocation()

  const projectData = location.state?.projectData

  return (
    projectData ? (
    <>
    <Header />
    <div className="md:min-h-screen px-8 text-slate-900 dark:text-gray-300 bg-lightGallery dark:bg-darkGallery transition duration-500 py-5">
      <NavLink to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />À Propos
      </NavLink>
      <div className="md:flex-none">
        <div className=" mt-2 md:mt-0 w-3/4 text-center md:w-64 md:float-right mx-10">
          <img
            src={projectData?.logo}
            alt=""
            className="md:w-full rounded-full drop-shadow-xl mr-0"
          />
          <h4 className="my-2 text-l font-bold text-center">Technologies</h4>
          <div className="flex justify-center md:w-64">
            {projectData?.technologies.map((technologie: string | undefined, index: number) => (
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
          <h1 className="text-4xl font-bold">{projectData?.title}</h1>
          {projectData?.video ? (
            <a
              href={projectData?.video}
              target="blank"
              className=" text-center ml-4 rounded-3xl text-white bg-lightBtnGallery dark:bg-darkBtnGallery p-2"
            >
              Video du projet
            </a>
          ) : null}
        </div>
      </div>
      <div className="h-1/3">
      <div className="my-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{projectData?.description}</p>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-bold">Objectif</h2>
        <div>
          {projectData?.objectifs.map((objectif: string, index: number) => (
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
          {projectData?.imagesPc.map((image: string | undefined, index: number) => (
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
    </div>
    <Footer />
  </>
  ) : (
    <Error />
  )
  )
}

export default Projet;
