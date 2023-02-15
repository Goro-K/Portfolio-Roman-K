import { useEffect, useState } from "react";
import Gallery from "../../components/gallery/gallery";
import ProfilCV from "./img-cv.webp";
import ky from "ky";
import Header from "../../components/header/index";

function Home() {
  // Variables d'état pour les données de projet
  const [projectData, setProjectData] = useState([]);
  const [technologieData, setTechnologieData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  // Fetch de l'api avec les différents projets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, technologie, experience] = await Promise.all([
          ky.get("http://localhost:5000/api/project").json(),
          ky.get("http://localhost:5000/api/technologie").json(),
          ky.get("http://localhost:5000/api/experience").json(),
        ]);
        setProjectData(project);
        setTechnologieData(technologie);
        setExperienceData(experience);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  // système de recherche
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <div className="mx-auto bg-gray-200 dark:bg-slate-900 transition duration-500 py-5">
        <div className="flex flex-col lg:flex-row text-4xl text-slate-900 dark:text-gray-300 transition duration-500 items-center lg:justify-evenly my-6 animate-appear">
          <div className="text-center">
            <h2 className="">Salut, Je suis Roman</h2>
            <p className="m-0 text-3xl">Développeur Web</p>
            <p className="text-3xl m-0 text-slate-900 dark:text-gray-100 font-bold">
              basé sur Lyon
            </p>
          </div>
          <div className="mt-3 w-5/6 lg:w-1/3">
            <p className="text-base mb-2">
              J&rsquo;ai rejoint en mars 2022 la formation Développeur Web de
              chez OpenClassrooms pour en faire mon métier. Je maîtrise le HTML
              & CSS et j&rsquo;essaie de maitriser le JavaScript à un niveau
              satisfaisant.
            </p>
            <p className="text-base mb-2">
              À l&rsquo;heure actuelle j&rsquo;ai travaillé sur 2 projets en JS
              native (Kanap et HotTakes) et 2 projets avec React (Kasa et mon
              PortFolio). J&rsquo;ai principalement travaillé sur des projets
              Front, je n&rsquo;ai travaillé que sur un seul projet Back
              (HotTakes), cependant je suis actuellement entrain de travailler
              sur un projet Fullstack utilisant Express et MongoDB que je
              connais déjà et React que j&rsquo;ai déjà partiellement compris.
              <br />
              Je suis ouvert à tout type de proposition et prêt à apprendre
              d&rsquo;autres langages de programmation si vous êtes prêt à me
              former/conseiller.
            </p>
            <p className="text-base">
              Si vous souhaitez connaître plus de détails sur mes capacités, je
              vous invite à cliquer sur les projets ci-dessous.
            </p>
          </div>
          <div className="cursor-pointer">
            <img
              src={ProfilCV}
              alt=""
              className="mt-3 lg:mt-0 h-52 w-52 rounded-lg"
              onClick={handleClick}
            />
          </div>
          <div className="text-base">
            {isClicked ? (
              <div className="overlay" onClick={() => setIsClicked(!isClicked)}>
                <div className="bg-slate-200 dark:bg-slate-900 w-80 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 shadow-2xl flex flex-col items-center">
                  <div className="flex justify-center pt-4">
                    <img src={ProfilCV} alt="" className="rounded-3xl w-60" />
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <h2>Contactez moi :</h2>
                  </div>
                  <p>Mail : romankizilt@gmail.com</p>
                  <p>Numéro : 07 50 44 77 12</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <Gallery
          projectData={projectData}
          technologieData={technologieData}
          experienceData={experienceData}
          searchTerm={searchTerm}
        />
      </div>
    </>
  );
}
export default Home;
