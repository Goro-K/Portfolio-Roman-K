import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-lightBg dark:bg-darkBg dark:text-darkHeadline">
      <div className="p-4">
        <div className="flex justify-center">
          <div className="flex gap-3 align-center">
            <a
              href="https://linkedin.com/in/roman-kiziltoprak-247338182/"
              target="blank"
              aria-label="linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl hover:text-blue-500"
              />
            </a>
            <a href="https://github.com/Goro-K" target="blank" aria-label="github">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hover:text-lightGallery"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
