import { useLoginMutation } from '@/app/api/apiSlice';
import Alert from '@/components/common/Alert';

const LoginAlert = ({ error, isError }) => {
  return (
    <div className='mt-2'>
      {error && isError ? <Alert>{error?.data.error}</Alert> : null}
    </div>
  );
};

export default LoginAlert;
