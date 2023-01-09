import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ProjectCard from "../card/projectCard";
import CompetenceCard from "../card/competenceCard";
import ExperienceCard from "../card/experienceCard";
import Technologie from "../../technologie.json";
import Projects from "../../projects.json";

function Gallery({ index }) {
  // state qui concerne le defilement des cards
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0); // currentIndex défini la position du slide
  const gallery = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  // offsetWidth => Renvoie la largeur totale d'un élément.
  const moveNext = () => {
    if (
      gallery.current !== null &&
      gallery.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && gallery.current !== null) {
      return (
        gallery.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (gallery !== null && gallery.current !== null) {
      gallery.current.scrollLeft = gallery.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = gallery.current
      ? gallery.current.scrollWidth - gallery.current.offsetWidth
      : 0;
  }, []);

  return (
    <div>
      <h2 className="ml-8 my-5 text-slate-800 dark:text-slate-200 text-xl font-bold">
        {index === 1
          ? "Projets"
          : index === 2
          ? "Compétences"
          : index === 3
          ? "Experiences"
          : null}
      </h2>
      <div className="relative overflow-hidden h-full">
        <div className="flex justify-between absolute top left w-full h-full ">
          <button
            type="submit"
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full z-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            type="submit"
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full z-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        {index === 1 ? (
          <div
            className="relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 my-6"
            ref={gallery}
          >
            {Projects.map((projet) => (
              <ProjectCard data={projet} key={projet.id} />
            ))}
          </div>
        ) : index === 2 ? (
          <div
            className="relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 my-6"
            ref={gallery}
          >
            {Technologie.map((technologie) => (
              <CompetenceCard data={technologie} key={technologie.id} />
            ))}
          </div>
        ) : index === 3 ? (
          <div
            className="relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 my-6"
            ref={gallery}
          >
            <ExperienceCard />
          </div>
        ) : null}
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
