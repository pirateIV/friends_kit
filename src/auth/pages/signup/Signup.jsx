import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { setProgress } from '../../../redux/reducers/progressReducer.js';
import useDocumentTitle from '../../../hooks/useDocumentTitle.js';
import useCustomLocation from '../../../hooks/useCustomLocation.jsx';
import SelectAccount from '../../../components/signup/steps/SelectAccount.jsx';
import CustomSignupProgress from '../../../components/signup/progress/CustomSignupProgress.jsx';

import './Signup.css';
import logo from '../../../assets/images/logo/logo.svg';

const Signup = () => {
  const dispatch = useDispatch();

  useDocumentTitle('Sign Up');
  useCustomLocation('signup') && dispatch(setProgress(0));
  const isSignupPath = useCustomLocation('signup');

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <nav className='fake-nav flex-center w-full h-[55px] bg-white'>
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
