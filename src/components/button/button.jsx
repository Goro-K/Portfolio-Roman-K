import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDarkMode from '../../hook/useDarkMode';

function Button() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="rounded-full border-solid border-black border-2 flex items-center dark:border-slate-200">
      {colorTheme === 'light'
        ? <FontAwesomeIcon onClick={() => setTheme(colorTheme)} icon={faMoon} className="text-2xl py-1 px-1.5 w-6 h-7" />
        : <FontAwesomeIcon onClick={() => setTheme(colorTheme)} icon={faSun} className="text-2xl py-1 px-1.5 w-6 h-7" /> }
    </div>
  );
}

export default Button;
