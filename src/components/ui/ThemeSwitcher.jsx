import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, setTheme } from "@/redux/reducers/themeReducer";
import DarkModeIcon from "@/shared/components/icons/DarkModeIcon";
import LightModeIcon from "@/shared/components/icons/LightModeIcon";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useSelector(getTheme());
  const dispatch = useDispatch();

  const selectedTheme = theme === "dark" ? "light" : "dark";
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };

  useEffect(() => {
    theme === "dark" ? setIsDarkMode(true) : setIsDarkMode(false);
  }, [theme]);

  return (
    <div id="theme-switcher">
      <label
        className={`animated-toggle flex items-center border h-6 w-[46px] p-0.5 rounded-full cursor-pointer ${
          isDarkMode ? "border-blue-500" : "border-gray-400"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={selectedTheme}
          onChange={changePreference}
        />
        <span>
          <div
            className={`text-white h-5 w-5 flex-center p-1 rounded-full transition-03 shadow-tiny ${
              isDarkMode
                ? "bg-blue-500 translate-x-full rotate-0"
                : "bg-yellow-700 translate-x-0 rotate-180"
            }`}
          >
            {!isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
