import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm?: string;
  glassHeader: string;
  glassHome: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  setSearchTerm,
  glassHeader,
  glassHome,
  searchTerm = ""
}) => {
  // récupère la recherche dans la barre de recherche
  const navigate = useNavigate();

const [searchParams, setSearchParams] = useSearchParams()
const [ isClicked, setIsClicked] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchParams({term : searchTerm})
    navigate("/");
  };
  return (
    <div className={`${glassHeader} ${glassHome}`}>
      <button aria-label="searchButton">
        <FontAwesomeIcon icon={faMagnifyingGlass}
          onClick={() => setIsClicked(!isClicked)}
          className="w-6 h-6 ml-2 mr-1"
        />
      </button>
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={
            isClicked
              ? "text-slate-900 p-1 mx-0.5 rounded-md focus:outline-none shadow-inner focus:shadow-lightGallery w-full search-bar-open"
              : "py-1 mx-0.5 rounded-md search-bar-close"
          }
          type="text"
          placeholder="Projets, Technos, Exp..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
