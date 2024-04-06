import { useDispatch } from 'react-redux';
import { setSearchQuery } from './searchQuerySlice';
import { setFilteredFriends } from './userFilterSlice';
import SearchIcon from '@/shared/components/icons/SearchIcon';

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    dispatch(setSearchQuery(query));
    dispatch(setFilteredFriends());
  };

  return (
    <div className='relative w-64 me-3' id='search-friends-input'>
      <input
        id='search'
        type='search'
        className='peer block w-full p-1.5 ps-9 text-sm text-gray-800 bg-white border border-gray-300 rounded-full outline-none  focus:border focus:border-blue-600 focus:shadow-sm transition-03 dark:text-gray-50 dark:border-[#334056] dark:focus:border-blue-600 dark:bg-[#283143]'
        placeholder='Search'
        onChange={(e) => handleSearch(e)}
      />
      <div
        id='icon'
        className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 p-2 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03'>
        <SearchIcon cs='w-4 h-4' />
        <span className='sr-only'>Search icon</span>
      </div>
    </div>
  );
};

export default SearchInput;
