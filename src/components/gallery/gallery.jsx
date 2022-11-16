import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Projects from '../../projects.json';
import Card from '../card/card';

function Gallery() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="ml-8 mt-5 text-slate-800 dark:text-slate-200 text-xl font-bold">Projets</h2>
      <div className="flex items-center">
        <div className=" h-80 left relative z-10 text-white w-1/12">
          <div className="w-full h-full absolute z-10 bg-gradient-to-r from-primary dark:from-gray-400">
            <FontAwesomeIcon icon={faChevronLeft} className="absolute text-5xl chevron-left" />
          </div>
        </div>
        <ul className="p-0 flex gallery w-11/12">
          {Projects.map((project) => (
            <li key={project.id} className="object-cover card mx-2 w-1/3">
              <Card
                title={project.title}
                image={project.image}
                link={project.lien}
              />
            </li>
          ))}
        </ul>
        <div className="h-80 right relative z-10 text-white w-1/12">
          <div className="w-full h-full absolute z-10 bg-gradient-to-l from-primary dark:from-gray-400">
            <FontAwesomeIcon icon={faChevronRight} className="absolute text-5xl chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
