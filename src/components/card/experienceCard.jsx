import PropTypes from 'prop-types';
import useHover from '../../hook/useHover';

const experiences = [
  {
    image: 'images/icon/logo-experience/openclassrooms.png',
    title: 'OpenClassrooms',
    durée: 'Durée : 8 mois',
  },
];

function ExperienceCard() {
  const [hoverRef, isHovered] = useHover();
  return (
    experiences.map((experience, index) => (
      <div key={`experience n°${index + 1}`} className="text-center relative h-60 w-72 snap-start" ref={hoverRef}>
        <img src={experience.image} alt="" className="w-full h-full aspect-square relative rounded-2xl" />
        {isHovered
          ? (
            <p className="absolute bottom-5 text-white w-full items-center text-xl font-bold ">
              {experience.durée}
            </p>
          )
          : null}
      </div>
    ))
  );
}

ExperienceCard.propTypes = {
  image: PropTypes.string,
};

ExperienceCard.defaultProps = {
  image: null,
};

export default ExperienceCard;
