import { useEffect, useState } from "react";
import Gallery from "../../components/gallery/gallery";
import ProfilCV from "../../assets/img-cv.png"
import ky from "ky";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import {API_URL} from "../../../config";

import { Project, Technologie, Experience } from '../../../types';

function Home() {
  // State pour stocker les données de l'api
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [technologieData, setTechnologieData] = useState<Technologie[]>([]);
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  
  // Fetch de l'api avec les différents projets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, technologie, experience]: [Project[], Technologie[], Experience[]] = await Promise.all([
          ky.get(`${API_URL}/projects`).then(res => res.json() as Promise<Project[]>),
          ky.get(`${API_URL}/technologie`).then(res => res.json() as Promise<Technologie[]>),
          ky.get(`${API_URL}/experience`).then(res => res.json() as Promise<Experience[]>),
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
  const [isWriting, setIsWriting] = useState(false);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} setIsWriting={setIsWriting} searchTerm={searchTerm} />
      {isWriting ? (
        <div className="mx-auto bg-lightBg dark:bg-darkBg transition duration-500">
          <Gallery
            projectData={projectData}
            technologieData={technologieData}
            experienceData={experienceData}
            searchTerm={searchTerm}
          />
        </div>
      ) : (
        <>
          <div className="text-base">
            {isClicked ? (
              <div className="overlay" onClick={() => setIsClicked(!isClicked)}>
                <div className="bg-lightBg dark:bg-darkBg w-80 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 shadow-2xl flex flex-col items-center">
                  <div className="flex justify-center pt-4">
                    <img src={ProfilCV} alt="" className="rounded-3xl w-60 h-60" />
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
          <div className="mx-auto bg-lightBg dark:bg-darkBg">
            <div className="flex flex-col lg:flex-row text-4xl 
            text-slate-900 dark:text-darkHeadline 
            items-center lg:justify-evenly animate-appear py-12 gap-8">
              <div className="text-center">
                <h2 className="">Salut, Je suis Roman</h2>
                <p className="m-0 text-3xl">Développeur Web</p>
                <p className="text-3xl m-0 text-lightButton dark:text-darkButton font-bold">
                  basé sur Lyon
                </p>
              </div>
              <div className="mt-3 w-5/6 lg:w-1/3 text-center text-lightHeadline dark:text-darkParagraph">
                <p className="text-base mb-2">
                  J&rsquo;ai rejoint en mars 2022 la formation Développeur Web
                  de chez OpenClassrooms pour en faire mon métier. Je maîtrise
                  le HTML, CSS et JavaScript.
                </p>
                <p className="text-base mb-2">
                  Je suis ouvert à tout type de proposition et prêt à apprendre
                  d&rsquo;autres langages de programmation si vous êtes prêt à
                  me former/conseiller.
                </p>
                <p className="text-base">
                  Si vous souhaitez connaître plus de détails sur mes capacités,
                  je vous invite à cliquer sur les projets, technologies et experiences ci-dessous.
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
            </div>

            <Gallery
              projectData={projectData}
              technologieData={technologieData}
              experienceData={experienceData}
              searchTerm={searchTerm}
            />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export default Home;
