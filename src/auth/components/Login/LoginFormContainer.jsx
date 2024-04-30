import PropTypes from 'prop-types';

const LoginFormContainer = ({ children }) => <div>{children}</div>;

LoginFormContainer.propTypes = { children: PropTypes.node.isRequired };

export default LoginFormContainer;
