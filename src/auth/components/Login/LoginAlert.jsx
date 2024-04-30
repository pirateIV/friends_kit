import PropTypes from 'prop-types';
import Alert from '@/components/common/Alert';

const LoginAlert = ({ isError, content }) => (
  <div className='mt-2'>{isError ? <Alert>{content}</Alert> : null}</div>
);

LoginAlert.propTypes = { isError: PropTypes.bool, content: PropTypes.string };

export default LoginAlert;
