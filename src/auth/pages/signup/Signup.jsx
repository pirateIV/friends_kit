import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import useCustomLocation from '../../../hooks/useCustomLocation.jsx';
import { setProgress } from '../../../redux/reducers/progressReducer';
import './Signup.css';
import logo from '../../../assets/images/logo/logo.svg';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import SelectAccount from '../../../components/signup/steps/SelectAccount';
import CustomSignupProgress from '../../../components/signup/progress/CustomSignupProgress';

const Signup = () => {
  const dispatch = useDispatch();
  useDocumentTitle('Sign Up');
  useCustomLocation('signup') && dispatch(setProgress(0));

  const isSignupPath = useCustomLocation('signup');

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <nav className='fake-nav w-full h-[55px] bg-white'>
            <img src={logo} className='max-w-[48px] mx-auto' alt='' />
          </nav>
          <CustomSignupProgress />
          {isSignupPath ? <SelectAccount /> : <Outlet />}
        </div>
      </main>
    </>
  );
};

export default Signup;
