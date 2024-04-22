import logo from '@/assets/images/logo/logo.svg';
import useCustomLocation from '@/hooks/useCustomLocation';
import ThemeSwitcher from '@/shared/components/ThemeSwitcher';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FakeNavigation = () => {
  const navigate = useNavigate();
  const isSignupPage = useCustomLocation('signup');

  let content;
  if (isSignupPage) {
    content = (
      <button
        className='absolute right-20 text-white px-6 py-1.5 rounded-md bg-blue-500'
        onClick={() => navigate('/login')}>
        Login
      </button>
    );
  } else {
    content = (
      <button
        className='absolute right-20 text-white px-6 py-1.5 rounded-md bg-blue-500'
        onClick={() => navigate('/signup')}>
        sign up
      </button>
    );
  }

  return (
    <nav className='fake-nav relative flex-center w-full h-[55px] bg-white dark:bg-[#1c2330]'>
      <img src={logo} height='48' width='48' alt='Logo' />
      <ThemeSwitcher />
      {content}
    </nav>
  );
};

export default FakeNavigation;
