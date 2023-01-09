import { useState } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

function CompetenceCard({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const onIntersect = (entry) => {
    entry.target.classList.add("fade-in");
  };

  const cardIntersect = useIntersectionObserver(onIntersect);
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
        <div className="fixed flex justify-center items-center flex-col bg-opacity-40 bg-gradient-to-b from-primary dark:from-gray-500 top-0 bottom-0 right-0 left-0 z-30 delay-300">
          <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 sm:w-96">
            <div className="flex items-center justify-between p-2">
              <h2 className="text-4xl font-bold"> {data.name} </h2>
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
                <p> Utilisé dans : </p>
                <ul>
                  {data.usedFor.map((used, index) => (
                    <li key={`utilisé - ${index}`}>{used}</li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={data.image} alt="" className="h-20 mr-4" />
              </div>
            </div>
            <div className="ml-4">
              <p>Connaissance de la technologie : </p>
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
