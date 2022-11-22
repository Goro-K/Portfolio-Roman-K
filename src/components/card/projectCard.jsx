import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, image }) {
  return (
    <div>
      <img src={image} alt="" className="w-full aspect-square rounded-2xl" />
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
