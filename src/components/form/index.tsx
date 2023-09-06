import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconeClose from "../iconeClose";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ky from "ky";
import { API_URL } from "../../../config";

interface FormProps {
  isClicked?: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ isClicked, setIsClicked }) => {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Gestion de la soumission du formulaire et gestion des valeurs des inputs, je n'utilise pas de state pour éviter les re-render
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    // Fetch (POST) avec la librairie Ky
    try {
      const response = await ky
        .post(`${API_URL}/form`, { json: values })
        .json();
      setSuccess("Le formulaire à bien été reçue !");
      setError(null); // Réinitialisez l'erreur en cas de succès.
    } catch (error: any) {
      if (error.response?.status === 409) {
        setError("L'adresse e-mail est déjà utilisée.");
      } else {
        setError("Erreur lors de l'envoi du formulaire.");
      }
      setSuccess(null); // Réinitialisez le succès en cas d'erreur.
    }
  };
  return (
    <>
      {isClicked ? (
        <div className="overlay-header">
          <div
            className="bg-lightGallery dark:bg-darkGallery h-auto rounded-lg text-lightHeadline dark:text-darkHeadline
            shadow-2xl flex flex-col items-center"
          >
            <div className="flex flex-col p-3">
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
                  <div className="flex justify-end w-full md:w-72 ">
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
                  <div className="flex justify-end w-full md:w-72 ">
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
                  <div className="flex justify-end w-full md:w-72 ">
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
                  <div className="flex justify-end w-full md:w-72 ">
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
                  <div className="flex justify-end w-full md:w-72 ">
                    <label htmlFor="phone" className="mr-2">
                      Téléphone
                    </label>{" "}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="^(?:0|\+33 ?|0?0?33 ?|)([1-9] ?(?:[0-9] ?){8})$"
                      placeholder="+33X XX ou 0X XX"
                      required
                      className="text-slate-900 rounded-md focus:outline-none shadow-inner focus:shadow-blue-300"
                    />
                  </div>
                  <div className="flex justify-end w-full md:w-72">
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
              <div>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-1" /> {success} {" "}
                </p>
              </div>
            ) : error ? (
              <div>
                <p>
                  <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
                  {" "}
                  {error}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Form;
