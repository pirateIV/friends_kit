import SearchIcon from '@/shared/components/icons/SearchIcon';

const NavbarEnd = () => {
  return (
    <div className='navbar-end flex items-center transition-all'>
      <div className='relative w-80'>
        <input
          id='search'
          type='search'
          className='peer block w-full p-1.5 ps-12 text-sm bg-gray-100 border border-gray-100 rounded-full outline-none focus:bg-white focus:border focus:border-gray-300 focus:shadow-sm'
          placeholder='Search'
        />
        <div
          id='icon'
          className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus:text-blue-600'>
          <SearchIcon />
          <span className='sr-only'>Search icon</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarEnd;
