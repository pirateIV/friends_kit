import logo from '@/assets/images/logo/logo.svg';

const FakeNavigation = () => {
  return (
    <nav className='fake-nav flex items-center justify-center w-full h-[55px] bg-white dark:bg-[#1c2330]'>
      <img src={logo} className='max-w-[48px] h-auto' alt='Logo' />
    </nav>
  );
};

export default FakeNavigation;
