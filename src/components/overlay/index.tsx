import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconeClose from "../iconeClose";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface OverlayProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    success : boolean;
  }

const Overlay: React.FC<OverlayProps> = ({isClicked, setIsClicked, handleSubmit, success}) => {
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
                <div className="">
                  <p>
                    <FontAwesomeIcon icon={faCircleCheck} className="mr-1" /> Le
                    formulaire à bien été reçue !{" "}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </>
    );
};

export default Overlay