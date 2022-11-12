import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className="bg-opacity-40">
      <div className="p-4 bg-gradient-to-b from-primary font-bold ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-4xl mx-4">
              Rk
              <span className="text-blue-500">.</span>
            </h1>
            <ul>
              <NavLink className="mx-7" href="#projects">Projets</NavLink>
              <NavLink className="mx-7" href="#competences">Compétence</NavLink>
              <NavLink className="mx-7" href="#experiences">Expérience</NavLink>
              <NavLink className="mx-7" href="#contact">Contact</NavLink>
            </ul>
          </div>
          <div className="mx-4">
            <a href="https://linkedin.com/in/roman-kiziltoprak-247338182/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-3 hover:text-blue-500" />
            </a>
            <a href="https://github.com/Goro-K" target="blank">
              <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-white" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
