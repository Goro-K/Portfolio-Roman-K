import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, image, link }) {
  return (
    <div className="flex flex-col items-center w-full my-8 ">
      <div className="relative w-full">
        <img src={image} alt="" className="bg-gray-200 dark:bg-gray-900 h-80 rounded-xl w-full" />
        <div className="absolute bottom-0 py-1 pl-2 text-slate-600 dark:text-slate-200  bg-slate-400 dark:bg-slate-700 w-full rounded-b-xl items-center h-14 text-base">
          <h2
            className="text-base"
          >
            {title}
          </h2>
          <div className="flex justify-between w-full items-center">
            <p className="text-blue-600 dark:text-red-400">
              Voir le projet
            </p>
            <a href={link}>
              <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-blue-600 dark:text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  image: null,
  link: null,
};

export default Card;
