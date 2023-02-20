import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({setSearchTerm, glassHeader, glassHome, setIsWriting}) {

    // récupère la recherche dans la barre de recherche
    const navigate = useNavigate();

    const [isClicked, setIsClicked] = useState(false)

    const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append("term", value);
        const newSearch = urlSearchParams.toString();
        navigate({ search: newSearch, replace: true });
        if (value.length === 0) {
            setIsWriting(false)
        } else {
            setIsWriting(true)
        }
    }
    return (
        <div className={`${glassHeader} ${glassHome}`}>
            <button aria-label="searchButton">
            <BsSearch onClick={() => setIsClicked(!isClicked)} className="w-6 h-6 ml-2 mr-1"/> 
            </button>
            <input 
                className={isClicked ? "text-slate-900 p-1 mx-0.5 rounded-md focus:outline-none w-full search-bar-open" : " py-1 mx-0.5 rounded-md search-bar-close"}
                type="text" 
                placeholder="Projets, Technos, Exp..."
                onChange={handleSearchTerm}/>
        </div>
    )
}

export default SearchBar