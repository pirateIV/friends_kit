import useDocumentTitle from '@/hooks/useDocumentTitle';
import SearchIcon from '@/shared/components/icons/SearchIcon';

const Friends = () => {
  useDocumentTitle('profile-friends');
  return (
    <section className='friends-list'>
      <header className=''>
        <div className='flex items-center justify-between p-2 bg-white rounded-md border border-gray-300'>
          <div className='dropdown'>All friends</div>
          <div className='relative w-64 me-3' id='search-friends-input'>
            <input
              id='search'
              type='search'
              className='peer block w-full p-1.5 ps-9 text-sm text-gray-800 bg-white border border-gray-300 rounded-full outline-none  focus:border focus:border-blue-600 focus:shadow-sm transition-03'
              placeholder='Search'
            />
            <div
              id='icon'
              className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03' >  
              <SearchIcon cs='w-4 h-4' />
              <span className='sr-only'>Search icon</span>
            </div>
          </div>
        </div>
      </header>

      <div className='friends-grid'></div>
    </section>
  );
};

export default Friends;

{
}
