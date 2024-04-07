import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '@/redux/reducers/themeReducer';
import DarkModeIcon from '@/shared/components/icons/DarkModeIcon';
import LightModeIcon from '@/shared/components/icons/LightModeIcon';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useSelector(getTheme());
  const dispatch = useDispatch();
  useEffect(() => {
    toggleDarkMode();
  }, [theme]);

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };

  return (
    <div id='theme-switcher'>
      <label
        className={`animated-toggle flex items-center border border-gray-700 h-6 w-[46px] p-0.5 rounded-full cursor-pointer`}>
        <input
          type='checkbox'
          className='hidden'
          checked={selectedTheme}
          onChange={changePreference}
        />
        <span>
          <div
            className={`text-white h-5 w-5 flex-center p-1 rounded-full ${
              isDarkMode
                ? 'bg-blue-500 translate-x-full rotate-0'
                : 'bg-yellow-800 translate-x-0 rotate-180'
            }`}
            style={{ transition: '0.3s ease' }}>
            {!isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
        </span>
        {/* <span className='toggler w-12 h-6 rounded-full border-2 border-gray-300 relative'>
          <span
            className={`absolute left-0 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${
              isDarkMode ? 'translate-x-full' : 'translate-x-0'
            }`}>
            <DarkModeIcon />
          </span>
          <span
            className={`absolute right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${
              isDarkMode ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <LightModeIcon />
          </span>
        </span> */}
      </label>
    </div>
  );
};

export default ThemeSwitcher;
