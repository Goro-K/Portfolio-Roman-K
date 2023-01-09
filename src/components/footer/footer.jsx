import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 dark:text-slate-300">
      <div className=" p-4 bg-gradient-to-t from-slate-400 dark:from-gray-700">
        <div className="flex align-center justify-between">
          <div className="flex align-center gap-3">
            <h3 className="pr-2">Pour me contacter :</h3>
            <a href="mailto:romankizilt@gmail.com">
              <img
                src="/images/icon/rs-icon/gmail-icon.png"
                alt=""
                className="h-8"
              />
            </a>
          </div>

          <div className="flex gap-3 align-center">
            <a
              href="https://linkedin.com/in/roman-kiziltoprak-247338182/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl hover:text-blue-500"
              />
            </a>
            <a href="https://github.com/Goro-K" target="blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
