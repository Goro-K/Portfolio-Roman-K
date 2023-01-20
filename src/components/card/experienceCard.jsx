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

  const onIntersect = (entry) => {};

  const cardRef = useIntersectionObserver({
    onIntersect,
  });
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
        <div className="overlay" onClick={() => setIsClicked(!isClicked)}>
          <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 sm:w-96">
            <div className="flex items-center justify-between m-4">
              <h2 className="text-2xl font-bold"> OpenClassrooms </h2>
            </div>
            <div className="ml-4 mb-2 flex justify-between items-center">
              <div>
                <p className="text-xl">Durée : 8 mois</p>
              </div>
            </div>
            <div className="px-4">
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
