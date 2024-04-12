import { useLoginMutation } from '@/app/api/apiSlice';
import Alert from '@/components/common/Alert';

const LoginAlert = ({ error, isError }) => {
  // let error;
  let errorContent;

  // if(error && isError) {
  //   error = <Alert>{}</Alert> 
  // } else
  return (
    <div className='mt-2'>
      {error && isError ? <Alert>{JSON.stringify(error)}</Alert> : null}
    </div>
  );
};

export default LoginAlert;
