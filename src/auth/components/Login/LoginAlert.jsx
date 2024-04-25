import PropTypes from 'prop-types';
import Alert from '@/components/common/Alert';

const LoginAlert = ({ error, isError }) => {
  let content;
  // console.log(error);
  if (error) {
    if (error.status === 'FETCH_ERROR') {
      content = 'Please connect to the internet';
    } else if (error.data.error) {
      content = error.data.error;
    }
  }
  // if (error && error.data.error) {
  //   content = error.data.error;
  // } else if (error && error.error) {
  //   content = error.error;
  // }
  return <div className='mt-2'>{isError ? <Alert>{content}</Alert> : null}</div>;
};

LoginAlert.propTypes = {
  error: PropTypes.object,
  isError: PropTypes.bool.isRequired,
};

export default LoginAlert;
