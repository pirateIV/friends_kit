import logo from '@/assets/images/logo/logo.svg';
import logoDark from '@/assets/images/logo/logo-dark.svg';
import {
  faBell,
  faHeart,
  faEnvelope,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchIcon from '@/shared/components/icons/SearchIcon';
import InputField from '../common/InputField';
import NavbarStart from './NavbarStart';

const Navigation = () => {
  

  return (
    <nav className='w-full'>
      <section className='h-14 bg-white flex items-center border-b border-gray-300 shadow-sm'>
        <a href='/' className='min-w-[58px] w-[58px] flex-center me-3'>
          <img src={logo} className='p-2.5' alt='logo' />
        </a>
        <div className='w-full px-4'>
          <div className='navbar-menu flex items-center justify-between w-full'>
            <NavbarStart />
            <div className='navbar-end flex items-center transition-all'>
              <div className='relative w-80'>
                <div
                  id='icon'
                  className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus/icon:text-red-600'>
                  <SearchIcon />
                  <span className='sr-only'>Search icon</span>
                </div>
                <input
                  id='search'
                  type='search'
                  className='block w-full p-1.5 ps-12 text-sm peer/search bg-gray-100 border border-gray-100 rounded-full outline-none focus:bg-white focus:border focus:border-gray-300 focus:shadow-s'
                  placeholder='Search'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
