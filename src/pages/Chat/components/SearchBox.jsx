const SearchBox = ({ searchQuery, setSearchQuery }) => (
  <div className="search-box mt-4">
    <div className="relative flex items-center pe-3 bg-gray-200 rounded-md overflow-hidden dark:bg-[#343434]">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search here..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="peer flex-1 py-2.5 ps-3 text-xs text-gray-900 bg-gray-200 outline-none placeholder:text-gray-600 dark:text-gray-100 dark:placeholder:text-gray-400 dark:bg-[#343434]"
      />
      <button
        type="button"
        className="bx bx-search scale-75 text-xl text-gray-600 peer-focus:text-gray-900 dark:text-gray-400 dark:peer-focus:text-white"
      ></button>
    </div>
  </div>
);

export default SearchBox;
