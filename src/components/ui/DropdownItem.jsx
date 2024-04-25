import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DropdownItem = ({ path, children }) => {
  const itemClass =
    'profile relative flex items-center gap-4 py-2 px-4 my-2 cursor-pointer hover:bg-gray-100/70 transition-03 hover:dark:bg-[#313848]';
  return (
    <div>
      <Link to={path} className={itemClass}>
        {children}
      </Link>
    </div>
  );
};

DropdownItem.propTypes = {
  path: PropTypes.string.isRequired,
};

export default DropdownItem;
