import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, image }) {
  return (
    <div>
      <img src={image} alt="" className="w-full aspect-square" />
      <div className="absolute bottom-0 text-slate-600 dark:text-slate-200  bg-slate-400 dark:bg-slate-700 w-full items-center h-14 text-base">
        <h3
          className="text-base"
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  image: null,
};

export default Card;
