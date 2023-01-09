import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../button/button";

function Header() {
  const [isActive, setIsActive] = useState(false);
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
              <NavLink className="visited:font-bold " href="#contact">
                Contact
              </NavLink>
            </ul>
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
          <div
            className="float-right md:hidden transition duration- ease-in-out"
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
          <ul className="flex flex-col">
            <NavLink className="visited:font-bold " to="/">
              À Propos
            </NavLink>
            <NavLink className="visited:font-bold " href="#experiences">
              Expérience
            </NavLink>
            <NavLink className="visited:font-bold " href="#contact">
              Contact
            </NavLink>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
