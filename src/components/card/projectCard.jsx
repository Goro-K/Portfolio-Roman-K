import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

function Card({ data }) {
  const onIntersect = (entry) => {
    entry.target.classList.add("fade-in");
  };

  const cardRef = useIntersectionObserver(onIntersect);
  return (
    <div>
      <div
        ref={cardRef}
        className="hover:animate-pulse text-center relative h-64 w-64 lg:h-96 lg:w-96 snap-start card"
      >
        <NavLink
          to={`/projet/${data.id}`}
          className="h-full w-64 lg:w-96 aspect-square block z-0"
        >
          <div>
            <img
              src={data.logo}
              alt=""
              className="w-full aspect-square rounded-2xl"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
