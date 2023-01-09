import { useState } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

const experiences = [
  {
    image: "images/icon/logo-experience/openclassrooms.webp",
    title: "OpenClassrooms",
    durée: "Durée : 8 mois",
  },
];

function ExperienceCard() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const onIntersect = (entry) => {
    entry.target.classList.add("fade-in");
  };

  const cardRef = useIntersectionObserver(onIntersect);
  return (
    <div>
      {experiences.map((experience, index) => (
        <div
          key={`experience n°${index + 1}`}
          className={`${
            isClicked
              ? "animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer"
              : "hover:animate-pulse text-center relative h-56 w-56 lg:h-72 lg:w-72 snap-start cursor-pointer card"
          }`}
          onClick={handleClick}
          ref={cardRef}
        >
          <img
            src={experience.image}
            alt=""
            className="w-full aspect-square rounded-2xl"
          />
        </div>
      ))}
      {isClicked ? (
        <div className="fixed flex justify-center items-center flex-col bg-opacity-40 bg-gradient-to-b from-primary dark:from-gray-500 top-0 bottom-0 right-0 left-0 z-30">
          <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 sm:w-96">
            <div className="flex items-center justify-between p-2">
              <h2 className="text-2xl font-bold"> OpenClassrooms </h2>
              <div
                className="float-right"
                onClick={() => setIsClicked(!isClicked)}
                role="button"
                tabIndex={0}
                aria-hidden="true"
              >
                <span
                  className={
                    isClicked
                      ? "first:translate-y-1 first:-rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                      : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                  }
                >
                  {}
                </span>
                <span
                  className={
                    isClicked
                      ? "hidden w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                      : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                  }
                >
                  {}
                </span>
                <span
                  className={
                    isClicked
                      ? "last:-translate-y-1 last:rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                      : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                  }
                >
                  {}
                </span>
              </div>
            </div>
            <div className="ml-4 mb-4 flex justify-between items-center">
              <div>
                <p>Durée : 8 mois</p>
              </div>
            </div>
            <div className="ml-4">
              <p className="mb-4">
                L'étude se fait à distance et les différents projets se font
                seuls, un suivi est établi par un mentor qui peut nous aider en
                répondant à nos questions.
              </p>
              <p>
                Durant ses 8 mois l'apprentissage des technologies comme HTML,
                CSS, JS, NodeJS, se font à travers la pratique via différents
                projets.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ExperienceCard;
