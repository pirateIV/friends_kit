import PropTypes from "prop-types";

const Button = ({ children, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className="relative inline-flex-center hover:bg-blue-700 hover:text-white hover:first-of-type:bg-red-400 last:text-gray-500 *:text-gray-400"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
