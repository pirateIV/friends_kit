import jenna from '@/assets/images/jenna.webp';
import SearchIcon from '@/shared/components/icons/SearchIcon';
import ThemeSwitcher from '@/shared/components/ThemeSwitcher';

const NavbarEnd = () => {
  return (
    <div className='relative navbar-end flex items-center gap-7 transition-all'>
      <div className='relative w-80 me-3'>
        <input
          id='search'
          type='search'
          className='peer block w-full p-1.5 ps-12 text-sm bg-gray-100 border border-gray-100 rounded-full outline-none focus:bg-white focus:border focus:border-gray-300 focus:shadow-sm transition-03'
          placeholder='Search'
        />
        <div
          id='icon'
          className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03'>
          <SearchIcon />
          <span className='sr-only'>Search icon</span>
        </div>
      </div>
      <div className='user-avatar'>
        <a className='block h-10 w-10 rounded-full bg-gray-200'>
          <img src={jenna} className='bg-cover rounded-full' />
        </a>
      </div>
      <ThemeSwitcher /> 
    </div>
  );
};

export default NavbarEnd;
