import { Outlet, useLocation } from 'react-router-dom';

import './Signup.css';
import logo from '../../../assets/images/logo/logo.svg';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import SelectAccount from '../../../components/signup/steps/SelectAccount';
import CustomSignupProgress from '../../../components/signup/progress/CustomSignupProgress';

const Signup = () => {
  useDocumentTitle('Sign Up');
  const location = useLocation()

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <nav className='fake-nav w-full h-[55px] bg-white'>
            <img src={logo} className='max-w-[48px] mx-auto' alt='' />
          </nav>
          <CustomSignupProgress />
          {location.pathname === '/signup/*' ? null : <SelectAccount />}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Signup;
