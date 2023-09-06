import { useEffect, useState } from "react";
import Gallery from "../../components/gallery/gallery";
import ProfilCV from "../../assets/img-cv.webp";
import ky from "ky";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import { API_URL } from "../../../config";

import { Project, Technologie, Experience } from "../../../types";

function Home() {
  // State pour stocker les données de l'api
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [technologieData, setTechnologieData] = useState<Technologie[]>([]);
  const [experienceData, setExperienceData] = useState<Experience[]>([]);

  // Fetch de l'api avec les différents projets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [project, technologie, experience]: [
          Project[],
          Technologie[],
          Experience[]
        ] = await Promise.all([
          ky
            .get(`${API_URL}/projects`)
            .then((res) => res.json() as Promise<Project[]>),
          ky
            .get(`${API_URL}/technologie`)
            .then((res) => res.json() as Promise<Technologie[]>),
          ky
            .get(`${API_URL}/experience`)
            .then((res) => res.json() as Promise<Experience[]>),
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

  // système de recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setIsWriting={setIsWriting}
        searchTerm={searchTerm}
      />
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
          <div className="mx-auto bg-lightBg dark:bg-darkBg">
            <div
              className="flex flex-col lg:flex-row text-4xl 
            text-slate-900 dark:text-darkHeadline 
            items-center lg:justify-evenly animate-appear py-12 gap-8"
            >
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
                  je vous invite à cliquer sur les projets, technologies et
                  experiences ci-dessous.
                </p>
              </div>
              <div className="group h-52 w-52">
                <div className="relative mt-3 h-full w-full rounded-xl shadow-xl transition-all 
                 duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] lg:mt-0">
                  <div className="absolute inset-0">
                    <img
                      src={ProfilCV}
                      alt="photo de Roman"
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl text-center px-12 [transform:rotateY(180deg)] [backface-visibility:hidden]
                   bg-darkHeadline/90 dark:bg-lightHeadline/90 ">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h3 className="text-xl font-bold">Me Contacter</h3>
                      <p className="text-sm">Mail : romankizilt@gmail.com</p>
                    </div>
                  </div>
                </div>
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
