import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profilImage from "./img-cv.webp";
import Button from "../button/button";
import IconeClose from "../iconeClose/index";

function Header() {
  const [isActive, setIsActive] = useState(false);

  // Pour me contacter
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleClick2() {
    setIsClicked2(!isClicked2);
  }

  return (
    <header className="bg-opacity-40 bg-slate-200 dark:bg-slate-900 dark:text-slate-200">
      <div className="p-4 bg-gradient-to-b from-primary dark:from-gray-500 ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-4xl mx-4 font-bold">
              Rk
              <span className="text-blue-500 dark:text-red-500">.</span>
            </h1>
            <div
              className="md:hidden"
              onClick={() => setIsActive(!isActive)}
              role="button"
              tabIndex={0}
              aria-hidden="true"
            >
              <span
                className={
                  isActive
                    ? "hidden"
                    : "block w-6 h-1 m-1 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                }
              >
                {}
              </span>
              <span
                className={
                  isActive
                    ? "hidden"
                    : "block w-6 h-1 m-1 bg-slate-900 dark:bg-slate-200 rounded-lg"
                }
              >
                {}
              </span>
              <span
                className={
                  isActive
                    ? "hidden"
                    : "block w-6 h-1 m-1 bg-slate-900 dark:bg-slate-200 rounded-lg"
                }
              >
                {}
              </span>
            </div>
            {/* Header de base */}
            <ul className="hidden md:flex gap-5 mx-3">
              <NavLink className="visited:font-bold " to="/">
                À Propos
              </NavLink>
              <p className="cursor-pointer" onClick={handleClick}>
                Contact
              </p>
            </ul>
          </div>
          <div>
            {isClicked ? (
              <div
                className="overlay-header"
                onClick={() => setIsClicked(!isClicked)}
              >
                <div className="bg-slate-200 dark:bg-slate-900 w-80 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 shadow-2xl">
                  <div className="flex justify-center pt-4">
                    <img
                      src={profilImage}
                      alt=""
                      className="rounded-3xl w-60"
                    />
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <h2>Contactez moi :</h2>
                  </div>
                  <p>Mail : romankizilt@gmail.com</p>
                  <p>Numéro : 07 50 44 77 12</p>
                  <p>
                    Vous pouvez directement m'envoyer un sms ou un mail avec le
                    nom de votre entreprise et les informations que vous
                    souhaiteriez me partager. J'y répondrais rapidement.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <Button />
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
        </nav>
      </div>
      {/* Hamburger  */}
      {isActive ? (
        <div className="transition-all duration-500 relative md:hidden bg-gray-200 dark:bg-slate-900 px-8 pt-2">
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <NavLink className="visited:font-bold " to="/">
                À Propos
              </NavLink>
              <p className="cursor-pointer" onClick={handleClick2}>
                Contact
              </p>
            </ul>
            <IconeClose setIsActive={setIsActive} isActive={isActive} />
          </div>
          <div>
            {isClicked2 ? (
              <div
                className="overlay"
                onClick={() => setIsClicked2(!isClicked2)}
              >
                <div className="bg-slate-200 dark:bg-slate-900 w-72 h-auto pb-2 pr-1 z-50 rounded-lg dark:text-slate-200 sm:w-96 shadow-2xl">
                  <div className="flex justify-center pt-4">
                    <img
                      src={profilImage}
                      alt=""
                      className="rounded-3xl w-60"
                    />
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <h2>Contactez moi :</h2>
                  </div>
                  <p>Mail : romankizilt@gmail.com</p>
                  <p>Numéro : 07 50 44 77 12</p>
                  <p>
                    Vous pouvez directement m'envoyer un sms ou un mail avec le
                    nom de votre entreprise et les informations que vous
                    souhaiteriez me partager. J'y répondrais rapidement.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
