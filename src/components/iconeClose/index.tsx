interface iconeCloseProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  hidden: string;
}

const iconeClose: React.FC<iconeCloseProps> = ({ 
  setIsActive, isActive, hidden 
}) => {
  return (
    <div
      className={`md:${hidden}`}
      onClick={() => setIsActive(!isActive)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span
        className={
          isActive
            ? "first:translate-y-1 first:-rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
            : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
        }
      >
        {}
      </span>
      <span
        className={
          isActive
            ? "hidden w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
            : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
        }
      >
        {}
      </span>
      <span
        className={
          isActive
            ? "last:-translate-y-1 last:rotate-45 block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
            : "block w-6 h-1 m-1 transition duration-300 ease-in-out bg-slate-900 dark:bg-slate-200 rounded-lg"
        }
      >
        {}
      </span>
    </div>
  );
}

export default iconeClose;
