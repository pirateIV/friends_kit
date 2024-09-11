const SearchBox = () => (
  <div className="search-box mt-4">
    <div className="relative flex items-center pe-3 bg-gray-200 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 py-2 ps-3 text-xs text-gray-900 bg-gray-200 border border-gray-100 outline-none placeholder:text-gray-600"
      />
      <button className="bx-search scale-75"></button>
    </div>
  </div>
);

export default SearchBox;
