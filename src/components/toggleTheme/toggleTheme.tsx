import { useState, useEffect } from "react";
import Sun from "../../assets/icon/sun.png";
import Moon from "../../assets/icon/moon.png";

function toggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    // Stocker la préférence de thème dans le stockage local
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="rounded-full border-solid border-black border-2 flex items-center dark:border-slate-200">
      {localStorage.getItem("theme") === "dark" ? (
        <p onClick={toggleTheme}>
          <img src={Moon} className="w-8 h-8 p-1 text-white" alt="moon icon" />
        </p>
      ) : (
        <p onClick={toggleTheme}>
          {" "}
          <img
            src={Sun}
            className="w-8 h-8 p-1  text-black"
            alt="sun icon"
          />{" "}
        </p>
      )}
    </div>
  );
}

export default toggleTheme;
