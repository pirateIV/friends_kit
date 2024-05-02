import { logout, setIsAuthenticated } from '@/auth/reducers/login/loginSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const DropdownItem = ({ title, path, children }) => {
  const itemClass =
    'profile relative flex items-center gap-4 py-2 px-4 my-2 cursor-pointer hover:bg-gray-100/70 transition-03 hover:dark:bg-[#313848]';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (title.includes('Log out')) {
      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <div onClick={(e) => handleClick(e)}>
      <Link to={path} className={itemClass}>
        {children}
      </Link>
    </div>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DropdownItem;
