import {
  useState, useEffect, useRef, useContext,
} from 'react';
import Projects from '../../projects.json';
import Card from '../card/card';
import DataContext from '../../context/dataContext';

function Gallery() {
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
      gallery.current !== null
      && gallery.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && gallery.current !== null) {
      return gallery.current.offsetWidth * currentIndex >= maxScrollWidth.current;
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
      <h2 className="ml-8 mt-5 text-slate-800 dark:text-slate-200 text-xl font-bold">
        Projets
      </h2>
      <div className=" carousel relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            type="submit"
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
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
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
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
        <div className="relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0" ref={gallery}>
          {Projects.map((project) => (
            <div
              key={project.id}
              className="text-center relative h-96 w-96 snap-start"
            >
              <a href={project.lien} className="h-full w-full aspect-square block z-0">
                <Card
                  title={project.title}
                  image={project.image}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
