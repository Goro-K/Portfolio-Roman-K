import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({setSearchTerm, glassHeader, glassHome}) {

    const [isClicked, setIsClicked] = useState(false)

    const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
    }
    return (
        <div className={`${glassHeader} ${glassHome}`}>
            <button aria-label="searchButton">
            <BsSearch onClick={() => setIsClicked(!isClicked)} className="w-6 h-6 ml-2 mr-1"/> 
            </button>
            <input 
                className={isClicked ? "p-1 mx-0.5 rounded-md focus:outline-none w-full" : "hidden"}
                type="text" 
                placeholder="Projets, Technos, Exp..."
                onChange={handleSearchTerm}/>
        </div>
    )
}

export default SearchBar