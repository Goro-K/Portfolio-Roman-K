import { NavLink } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Error() {
  return (
    <>
    <Header />
    <div className="min-h-screen px-8 text-lightHeadline dark:text-darkHeadline bg-lightGallery dark:bg-darkGallery transition duration-500 py-5 text-center gap-10 flex flex-col">
      <h1 className="text-9xl m-10 lg:m-16">404</h1>
      <h2 className="text-3xl mb-10 lg:text-5xl"> La page que vous recherchez est inexistante !</h2>
      <NavLink to="/" className="text-2xl mt-20 lg:text-4xl"> Retourner sur la page d'accueil </NavLink>
    </div>
    <Footer />
    </>
  );
}
