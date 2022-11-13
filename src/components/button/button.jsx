import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDarkMode from '../../hook/useDarkMode';

function Button() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="rounded-3xl border-solid border-black border-2 flex items-center">
      {colorTheme === 'light' ? <FontAwesomeIcon onClick={() => setTheme(colorTheme)} icon={faMoon} className="text-2xl py-1 px-2" /> : <FontAwesomeIcon onClick={() => setTheme(colorTheme)} icon={faSun} className="text-2xl py-1 px-2" /> }
    </div>
  );
}

export default Button;
