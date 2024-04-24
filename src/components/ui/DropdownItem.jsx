import { Link } from 'react-router-dom';

const DropdownItem = ({ children }) => {
  return (
    <div>
      <Link
        to='@me'
        className='profile relative flex items-center gap-4 py-2 px-4 my-2 cursor-pointer hover:bg-gray-100/70 transition-03 hover:dark:bg-[#313848]'>
        {children}{' '}
      </Link>
    </div>
  );
};

export default DropdownItem;
