import { useContext } from "react";
import { ThemeContext } from "../../context/DarkMode";
const DarkMode = () => {
  const { handleChange } = useContext(ThemeContext);
  return (
    <button
      onClick={handleChange}
      className="hover:rounded-3xl hover:bg-slate-300 w-8 h-8 leading-9 text-xl rounded-full m-1 text-yellow-400 dark:text-white "
    >
      <ion-icon name="sunny"></ion-icon>
    </button>
  );
};
export default DarkMode;
