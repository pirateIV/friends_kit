import logo from '@/assets/images/logo/logo.svg';
import logoDark from '@/assets/images/logo/logo-dark.svg';
import {
  faBell,
  faHeart,
  faEnvelope,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';
import {
  mdiApps,
  mdiBellOutline,
  mdiMessageOutline,
  mdiHeartOutline,
  mdiMailbox,
} from '@mdi/js';

const Navigation = () => {
  const navIconButtons = [
    mdiApps,
    mdiBellOutline,
    mdiMessageOutline,
    mdiHeartOutline,
    mdiMailbox,
  ];

  return (
    <nav className='w-full'>
      <section className='h-14 bg-white flex items-center border-b border-gray-300 shadow-sm'>
        <a href='/' className='min-w-[58px] w-[58px] flex-center me-3'>
          <img src={logo} className='p-2.5' alt='logo' />
        </a>
        <div className='w-full px-4'>
          <div className='navbar-menu flex items-center justify-between w-full'>
            <div className='navbar-start flex items-center gap-8 *:text-gray-500'>
              {navIconButtons.map((icon) => (
                <button>
                  <Icon path={icon} size={0.9} />
                </button>
              ))}
            </div>
            <div className='navbar-end flex items-center transition-all'>
              <div className='relative w-80'>
                <div
                  id='icon'
                  className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus/icon:text-red-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-search'>
                    <circle cx='11' cy='11' r='8'></circle>
                    <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  </svg>
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
