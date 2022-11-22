import PropTypes, { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const technologies = [
  'images/icon/logo-technologies/html-icon.png',
  'images/icon/logo-technologies/css-icon.png',
  'images/icon/logo-technologies/sass-icon.png',
  'images/icon/logo-technologies/js-icon.png',
  'images/icon/logo-technologies/tailwind-icon.png',
  'images/icon/logo-technologies/nodejs-icon.png',
  'images/icon/logo-technologies/express-icon.png',
  'images/icon/logo-technologies/mongoDB-icon.png',
  'images/icon/logo-technologies/react-icon.png',
];

function CompetenceCard() {
  return (
    technologies.map((technologie, index) => (
      <div
        key={`technologie ${index + 1}`}
        className="text-center relative h-40 w-40 snap-start"
      >
        <NavLink to="/competences" className="h-full w-full aspect-square block z-0">
          <div>
            <img src={technologie} alt="" className="w-full aspect-square" />
          </div>
        </NavLink>
      </div>
    ))
  );
}
export default CompetenceCard;
