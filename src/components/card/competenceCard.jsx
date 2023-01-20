import { useState } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
function CompetenceCard({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const onIntersect = (entry) => {};

  const cardIntersect = useIntersectionObserver({
    onIntersect,
  });
  return (
    <div>
      <div
        className={`${
          isClicked
            ? "animate-pulse text-center z-20 relative h-40 w-40 snap-start cursor-pointer"
            : "hover:animate-pulse text-center z-20 relative h-40 w-40 snap-start cursor-pointer card"
        }`}
        onClick={handleClick}
        ref={cardIntersect}
      >
        <div className="h-40 w-40 aspect-square block">
          <img src={data.image} alt="" className="w-full aspect-square" />
        </div>
      </div>
      {isClicked ? (
        <div className="overlay" onClick={() => setIsClicked(!isClicked)}>
          <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto mb-2 pr-4 z-50 rounded-lg dark:text-slate-200 sm:w-96">
            <div className="flex items-center justify-between m-2">
              <h2 className="text-4xl font-bold"> {data.name} </h2>
            </div>
            <div className="m-4 flex justify-between items-center">
              <div>
                <p> Utilisé dans : </p>
                <ul>
                  {data.usedFor.map((used, index) => (
                    <li key={`utilisé - ${index}`}>{used}</li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={data.image} alt="" className="h-20" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text">Connaissance de la technologie : </p>
              <ul>
                {data.knowledge.map((knowledge, index) => (
                  <li key={`connaissance - ${index}`}>{knowledge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CompetenceCard;
