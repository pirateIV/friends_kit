import SearchIcon from '@/shared/components/icons/SearchIcon';

const NavbarEnd = () => {
  return (
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
  );
};

export default NavbarEnd;
