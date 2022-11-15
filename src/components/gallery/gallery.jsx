import Projects from '../../projects.json';
import Card from '../card/card';

function Gallery() {
  return (
    <div className="bg-gray-300 dark:bg-slate-600 transition duration-500">
      <ul className="p-0 flex items-center justify-around">
        {Projects.map((project) => (
          <li key={project.id} className="w-3/12 object-cover">
            <Card
              title={project.title}
              image={project.image}
              link={project.lien}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
