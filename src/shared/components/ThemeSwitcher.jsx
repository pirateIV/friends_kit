import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '@/redux/reducers/themeReducer';


const ThemeSwitcher = () => {
  const theme = useSelector(getTheme());
  const dispatch = useDispatch();

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };
  

  const themeBtnClass = 'absolute end-10 text-gray-500 inline-flex-center dark:text-gray-400 hover:bg-gray-100 w-8 h-8 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1'
  
  return (
    <button
    id='theme-toggle'
    className={themeBtnClass}
    onClick={() => changePreference()}>
    {theme === 'dark' ? <svg className='w-4 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path></svg> : <svg className='text-blue-400 dark:text-white w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path></svg>}
  </button>
  )
}

export default ThemeSwitcher