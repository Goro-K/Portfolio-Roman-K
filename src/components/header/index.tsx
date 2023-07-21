import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ky from "ky";
import Button from "../button/button";
import IconeClose from "../iconeClose/index";
import SearchBar from "../searchBar/searchBar";

interface HeaderProps {
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  setIsWriting?: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm?: string;
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm, setIsWriting, searchTerm }) => {
  const [success, setSuccess] = useState(false);
  // Gestion de la soumission du formulaire et gestion des valeurs des inputs, je n'utilise pas de state pour éviter les re-render
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    // Fetch (POST) avec la librairie Ky
    try {
      const response = await ky
        .post("http://localhost:5000/form", { json: values })
        .json();
      console.log(response);
      setSuccess(true);
    } catch (error) {
      alert("Il doit y avoir une erreur dans les champs enregistré");
    }
  };

  // Pour fermer ou ouvrir la card
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
    <>
    {isClicked ? (
      <div className="overlay-header">
        <div
          className="bg-lightGallery dark:bg-darkGallery 
        md:w-5/12 xl:w-6/12 h-auto z-50 rounded-lg text-lightHeadline dark:text-darkHeadline
        shadow-2xl flex flex-col items-center"
        >
          <div className="flex flex-col p-3 w-full">
            <div className="flex justify-between">
              <h2>Formulaire de Contact</h2>
              <IconeClose
                setIsActive={setIsClicked}
                isActive={isClicked}
                hidden=""
              />
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid justify-center xl:grid-cols-2 grid-col gap-4 justify-items-center">
                <div className="flex justify-end w-72 2xl:">
                  <label htmlFor="company" className="mr-2">
                    Société
                  </label>{" "}
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
                <div className="flex justify-end w-72">
                  <label htmlFor="firstname" className="mr-2">
                    Prénom
                  </label>{" "}
                  <input
                    type="text"
                    id="firstname"
                    name="firstName"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
                <div className="flex justify-end w-72">
                  <label htmlFor="lastname" className="mr-2">
                    Nom
                  </label>{" "}
                  <input
                    type="text"
                    id="lastname"
                    name="lastName"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
                <div className="flex justify-end w-72">
                  <label htmlFor="email" className="mr-2">
                    Mail
                  </label>{" "}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
                <div className="flex justify-end w-72">
                  <label htmlFor="phone" className="mr-2">
                    Téléphone
                  </label>{" "}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$"
                    placeholder="+33X XX ou 0X XX"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
                <div className="flex justify-end w-72">
                  <label htmlFor="subject" className="mr-2">
                    Sujet
                  </label>{" "}
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message">Message</label>{" "}
                <textarea
                  id="message"
                  name="message"
                  required
                  className="text-slate-900 rounded-md pl-1 focus:outline-none shadow-inner focus:shadow-blue-300"
                />
              </div>
              <input type="submit" />
            </form>
          </div>
          {success ? (
            <div className="">
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mr-1"
                />{" "}
                Le formulaire à bien été reçue !{" "}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    ) : null}

    <header className="animate-appear bg-lightBg text-lightHeadline dark:bg-darkBg dark:text-darkHeadline ">
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
                searchTerm= {searchTerm}
                setSearchTerm={setSearchTerm}
                glassHeader="glass-header"
                glassHome=""
              />
            )}

            <Button />
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
                <p className="cursor-pointer font-bold" onClick={handleClick2}>
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
            searchTerm = {searchTerm}
            setSearchTerm={setSearchTerm}
            glassHome="glass-home"
            glassHeader=""
          />
        )}
      </nav>
    </header>
    <div>
              {isClicked2 ? (
                <div className="overlay">
                  <div className="bg-lightGallery dark:bg-darkBg md:w-5/12 xl:w-6/12 h-auto z-50 rounded-lg dark:text-slate-200 shadow-2xl flex flex-col items-center">
                    <div className="flex flex-col p-3 w-full">
                      <div className="flex justify-between">
                        <h2>Formulaire de Contact</h2>
                        <IconeClose
                          setIsActive={setIsClicked2}
                          isActive={isClicked2}
                          hidden=""
                        />
                      </div>
                      <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="grid justify-center xl:grid-cols-2 grid-col gap-4 justify-items-center">
                          <div className="flex justify-end w-72 2xl:">
                            <label htmlFor="company" className="mr-2">
                              Société
                            </label>{" "}
                            <input
                              type="text"
                              id="company"
                              name="company"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                          <div className="flex justify-end w-72">
                            <label htmlFor="firstname" className="mr-2">
                              Prénom
                            </label>{" "}
                            <input
                              type="text"
                              id="firstname"
                              name="firstName"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                          <div className="flex justify-end w-72">
                            <label htmlFor="lastname" className="mr-2">
                              Nom
                            </label>{" "}
                            <input
                              type="text"
                              id="lastname"
                              name="lastName"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                          <div className="flex justify-end w-72">
                            <label htmlFor="email" className="mr-2">
                              Mail
                            </label>{" "}
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                          <div className="flex justify-end w-72">
                            <label htmlFor="phone" className="mr-2">
                              Téléphone
                            </label>{" "}
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              pattern="^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$"
                              placeholder="+33X XX ou 0X XX"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                          <div className="flex justify-end w-72">
                            <label htmlFor="subject" className="mr-2">
                              Sujet
                            </label>{" "}
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              required
                              className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <label htmlFor="message">Message</label>{" "}
                          <textarea
                            id="message"
                            name="message"
                            required
                            className="text-slate-900 rounded-md pl-1 focus:outline-none shadow-inner focus:shadow-blue-300"
                          />
                        </div>
                        <input type="submit" />
                      </form>
                    </div>
                    {success ? (
                      <div className="">
                        <p>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="mr-1"
                          />{" "}
                          Le formulaire à bien été reçue !{" "}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
    </>
  );
};

export default Header;
