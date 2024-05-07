import './index.css';
import { useEffect, useRef, useState } from 'react';
import Profile from '../ui/Profile';
import UserSettings from '../ui/UserSettings';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import SearchIcon from '@/shared/components/icons/SearchIcon';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/features/auth/reducers/login/loginSlice';

const NavbarEnd = () => {
  const [isHidden, setisHidden] = useState(true);
  const user = useSelector(selectCurrentUser);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setisHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownRef]);

  return (
    <div className='relative navbar-end flex items-center gap-7 transition-all'>
      <div className='relative w-80 me-3'>
        <input
          id='search'
          type='search'
          className='peer block w-full p-1.5 ps-12 text-sm bg-gray-100 border border-gray-100 rounded-full outline-none focus:bg-white focus:border focus:border-gray-300 focus:shadow-sm transition-03 dark:text-gray-50 dark:bg-[#283143] dark:border-[#283143]'
          placeholder='Search'
        />
        <div
          id='icon'
          className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03'>
          <SearchIcon />
          <span className='sr-only'>Search icon</span>
        </div>
      </div>
      <div className='relative'>
        <button
          id='user-avatar'
          className='relative block h-10 w-10 rounded-full'
          onClick={() => setisHidden(!isHidden)}>
          <span className='sr-only'>Open user menu</span>
          <span className='active absolute h-3 w-3 bg-green-300 border-2 border-white rounded-full top-0 right-0 dark:border-[#1c2330]'></span>
          <img
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            className='bg-cover rounded-full'
            alt='user photo'
          />
        </button>
        <div
          ref={dropdownRef}
          id='dropdown'
          className={`${
            isHidden ? 'hidden' : 'flex'
          } flex-col justify-start absolute z-20 bg-white rounded-lg shadow w-[298px] top-[calc(100%+20px)] -right-4 dark:bg-[#171c26] dark:divide-gray-600`}>
          <div className='flex items-center justify-between p-4 text-sm text-gray-900 dark:text-white'>
            <small className='text-gray-500 font-semibold uppercase'>{`${user?.firstName} ${user?.lastName}`}</small>
            <ThemeSwitcher />
          </div>
          <Profile />
          <UserSettings />
          <div className='arrow absolute -top-1.5 right-6 h-3 w-3 transform rotate-45 bg-white dark:bg-[#171c26]'></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEnd;
