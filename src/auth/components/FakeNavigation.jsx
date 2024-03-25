import logo from '@/assets/images/logo/logo.svg';
import darkIcon from '@/assets/icons/dark-icon.svg';
import lightIcon from '@/assets/icons/light-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '@/redux/reducers/themeReducer';

const FakeNavigation = () => {
  const theme = useSelector(getTheme());
  const dispatch = useDispatch();

  const selectedTheme = theme === 'dark' ? 'light' : 'dark';
  const changePreference = () => {
    dispatch(setTheme(selectedTheme));
  };

  return (
    <nav className='fake-nav relative flex items-center justify-center w-full h-[55px] bg-white dark:bg-[#1c2330]'>
      <img src={logo} className='max-w-[48px] h-auto' alt='Logo' />
      <button
        id='theme-toggle'
        className='h-4 w-4 absolute end-10'
        onClick={() => changePreference()}>
        <img src={theme === 'dark' ? lightIcon : darkIcon} alt='theme toggle' />
      </button>
    </nav>
  );
};

export default FakeNavigation;
