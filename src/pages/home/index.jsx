import Header from '../../components/header/index';
import Gallery from '../../components/gallery/gallery';
import ProfilCV from './img-CV.png';

function Home() {
  return (
    <div className="mx-auto bg-gray-200 dark:bg-slate-900 transition duration-500">
      <Header />
      <div className="flex text-4xl text-slate-900 dark:text-gray-300 transition duration-500 items-center justify-evenly my-6">
        <div className="text-center">
          <h2 className="">
            Salut, Je suis Roman
          </h2>
          <p className="m-0 text-3xl">
            Développeur Web
          </p>
          <p className="text-3xl m-0 text-slate-900 dark:text-gray-100 font-bold">
            basé sur Lyon
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-base text-justify mb-2">
            J&rsquo;ai rejoint en mars 2022 la formation Développeur Web de chez OpenClassrooms pour
            en faire mon métier.
            Je maîtrise le HTML & CSS et j&rsquo;essaie de maitriser le JavaScript à un niveau
            satisfaisant.
          </p>
          <p className="text-base text-justify mb-2">
            À l&rsquo;heure actuelle j&rsquo;ai travaillé sur 2 projet en JS native
            (Kanap et HotTakes) et deux projets avec React (Kasa et mon PortFolio).
            J&rsquo;ai principalement travaillé sur des projets Front,
            je n&rsquo;ai travaillé que sur un seul projet Back (HotTakes),
            cependant je suis actuellement entrain de travaillé sur un projet
            Fullstack utilisant Express et MongoDB que je connais déjà et React que
            j&rsquo;ai déjà partiellement compris.
            <br />
            Je suis ouvert à tout type de proposition et prêt à apprendre d&rsquo;autres langages
            de programmation si vous êtes prêt à me former.
          </p>
          <p className="text-base text-justify">
            Si vous souhaité connaître plus de détail sur mes capacités, je vous invite à cliqué
            sur les projets ci-dessous.
          </p>
        </div>
        <div>
          <img src={ProfilCV} alt="" className="h-52 rounded-lg" />
        </div>
      </div>

      <Gallery index={1} />
      <Gallery index={2} />
      <Gallery index={3} />
    </div>
  );
}
export default Home;
