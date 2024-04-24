import LoginForm from './LoginForm';
import LoginAlert from './LoginAlert';
import { getTheme } from '@/redux/reducers/themeReducer';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const LoginFormContainer = ({ error, login, isError, setIsError }) => {
  const theme = useSelector(getTheme());
  return (
    <div>
      <LoginAlert error={error} isError={isError} />
      <LoginForm login={login} theme={theme} isError={isError} setIsError={setIsError} />
    </div>
  );
};

LoginFormContainer.propTypes = {
  error: PropTypes.object,
  login: PropTypes.func,
  setIsError: PropTypes.func,
  isError: PropTypes.bool.isRequired,
};

export default LoginFormContainer;
