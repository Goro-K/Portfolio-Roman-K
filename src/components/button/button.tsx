import { useState, useEffect } from "react";
import Sun from "../../assets/icon/sun.png"
import Moon from "../../assets/icon/moon.png"

function Button() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="rounded-full border-solid border-black border-2 flex items-center dark:border-slate-200">
      {theme === "light" ? (
        <p onClick={handleThemeSwitch}>
          {" "}
          <img src={Sun} className="w-8 h-8 p-1 text-black" alt="sun icon" />{" "}
        </p>
      ) : (
        <p onClick={handleThemeSwitch}>
          <img src={Moon} className="w-8 h-8 p-1 text-white" alt="moon icon" />
        </p>
      )}
    </div>
  );
}

export default Button;
