import { Outlet, useLocation } from 'react-router-dom';

import './Signup.css';
import logo from '../../../assets/images/logo/logo.svg';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import SelectAccount from '../../../components/signup/steps/SelectAccount';
import CustomSignupProgress from '../../../components/signup/progress/CustomSignupProgress';
import { useDispatch } from 'react-redux';
import { setProgress } from '../../../redux/reducers/progressReducer';
import useCustomLocation from '../../../hooks/useCustomLocation.jsx';
import useIsSignupPath from '../../../hooks/useCustomLocation.jsx';

const Signup = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isSignupPath = useIsSignupPath('signup');

  console.log(location.pathname);

  dispatch(setProgress(0));
  useDocumentTitle('Sign Up');
  console.log(isSignupPath);

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <nav className='fake-nav w-full h-[55px] bg-white'>
            <img src={logo} className='max-w-[48px] mx-auto' alt='' />
          </nav>
          <CustomSignupProgress />
          {/* {isSignupPath ? <SelectAccount /> : null} */}
          {/* <Outlet /> */}
          {isSignupPath ? <SelectAccount /> : <Outlet />}
        </div>
      </main>
    </>
  );
};

export default Signup;
