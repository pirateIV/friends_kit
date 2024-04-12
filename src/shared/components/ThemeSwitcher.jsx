import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '@/redux/reducers/themeReducer';
import ThemeIconLight from './icons/ThemeIconLight';
import ThemeIconDark from './icons/ThemeIconDark';

const ThemeSwitcher = () => {
  const theme = useSelector(getTheme());
  const dispatch = useDispatch();

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };

  const themeBtnClass =
    'absolute end-10 text-gray-500 inline-flex-center dark:text-gray-400 hover:bg-gray-100 w-8 h-8 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1';

  return (
    <button
      id='theme-toggle'
      className={themeBtnClass}
      onClick={() => changePreference()}>
      {theme !== 'dark' ? <ThemeIconLight /> : <ThemeIconDark />}
    </button>
  );
};

export default ThemeSwitcher;
