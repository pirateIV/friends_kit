import { useState } from 'react';
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

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };
  

  return (
    <div id='theme-switcher'>
      <label className='animated-toggle flex items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={selectedTheme}
          onChange={changePreference}
          className='hidden'
        />
        <span className='toggler w-12 h-6 rounded-full border-2 border-gray-300 relative'>
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
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
