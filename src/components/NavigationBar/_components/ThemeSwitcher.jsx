import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '@/redux/reducers/themeReducer';
import DarkModeIcon from '@/shared/components/icons/DarkModeIcon';
import LightModeIcon from '@/shared/components/icons/LightModeIcon';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const theme = useSelector(getTheme());
  const dispatch = useDispatch();
  useEffect(() => {
    theme === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);
  }, [theme]);

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };

  return (
    <div id='theme-switcher'>
      <label
        className={`animated-toggle flex items-center border h-6 w-[46px] p-0.5 rounded-full cursor-pointer ${
          isDarkMode ? 'border-blue-500' : 'border-gray-700'
        }`}>
        <input
          type='checkbox'
          className='hidden'
          checked={selectedTheme}
          onChange={changePreference}
        />
        <span>
          <div
            className={`text-white h-5 w-5 flex-center p-1 rounded-full transition-03 ${
              isDarkMode
                ? 'bg-blue-500 translate-x-full rotate-0'
                : 'bg-yellow-800 translate-x-0 rotate-180'
            }`}>
            {!isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
