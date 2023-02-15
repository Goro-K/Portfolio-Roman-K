import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import useDarkMode from "../../hook/useDarkMode";

function Button() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="rounded-full border-solid border-black border-2 flex items-center dark:border-slate-200">
      {colorTheme === "light" ? (
        <p onClick={() => setTheme(!colorTheme)}>
          {" "}
          <BsFillSunFill className="w-8 h-8 p-1" />{" "}
        </p>
      ) : (
        <p onClick={() => setTheme(colorTheme)}>
          <BsFillMoonFill className="w-8 h-8 p-1" />
        </p>
      )}
    </div>
  );
}

export default Button;
