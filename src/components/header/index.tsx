import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ToggleTheme from "../toggleTheme/toggleTheme";
import SearchBar from "../searchBar/searchBar";
import Form from "../form/index";

interface HeaderProps {
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  setIsWriting?: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm?: string;
  isWriting:boolean;
}

const Header: React.FC<HeaderProps> = ({
  setSearchTerm,
  setIsWriting,
  searchTerm,
  isWriting,
}) => {

  // Pour fermer ou ouvrir la card
  const [isActive, setIsActive] = useState(false);

  // Pour me contacter
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <Form
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <header className="bg-lightBg text-lightHeadline dark:bg-darkBg dark:text-darkHeadline ">
        <nav className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-4xl mx-4 font-bold">
                Rk
                <span className="text-blue-500 dark:text-red-500">.</span>
              </h1>
              {/* Hamburger icon */}
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
              <div className="hidden md:flex gap-5 mx-3">
                <NavLink
                  className="visited:font-bold p-1 text-lightBg bg-lightButton dark:bg-darkButton rounded-md"
                  to="/"
                >
                  À Propos
                </NavLink>
                <p
                  className="cursor-pointer p-1 text-lightBg bg-lightButton dark:bg-darkButton rounded-md"
                  onClick={handleClick}
                >
                  Me Contacter
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {setSearchTerm && setIsWriting && (
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  glassHeader="glass-header"
                  glassHome=""
                  setIsWriting={setIsWriting}
                  isWriting={isWriting}
                />
              )}

              <ToggleTheme />
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
              <a
                href="https://github.com/Goro-K"
                target="blank"
                aria-label="github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl hover:text-lightGallery"
                />
              </a>
            </div>
          </div>
          {/* Hamburger  */}
          {isActive ? (
            <div className="relative md:hidden bg-lightBg dark:bg-darkBg pl-4 py-2">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <NavLink className=" font-bold " to="/">
                    À Propos
                  </NavLink>
                  <p className="cursor-pointer font-bold" onClick={handleClick}>
                    Me Contacter
                  </p>
                </div>
                <div
                  className={`md:hidden`}
                  onClick={() => setIsActive(!isActive)}
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <span
                    className={
                      isActive
                        ? "first:translate-y-1 first:-rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                        : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                    }
                  >
                    {}
                  </span>
                  <span
                    className={
                      isActive
                        ? "hidden w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                        : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                    }
                  >
                    {}
                  </span>
                  <span
                    className={
                      isActive
                        ? "last:-translate-y-1 last:rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                        : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
                    }
                  >
                    {}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {setSearchTerm && setIsWriting && (
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              glassHome="glass-home"
              glassHeader=""
              setIsWriting = {setIsWriting}
              isWriting={isWriting}
            />
          )}
        </nav>
      </header>
      <div>
        {isClicked ? (
          <Form
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        ) : null}
      </div>
    </>
  );
};

export default Header;
