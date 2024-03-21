import logo from '@/assets/images/logo/logo.svg';

const FakeNavigation = () => {
  return (
    <nav className='fake-nav flex-center w-full h-[55px] bg-white'>
      <img src={logo} className='max-w-[48px] mx-auto' alt='' />
    </nav>
  );
};

export default FakeNavigation;
