import logo from '@/assets/images/logo/logo.svg';
import ThemeSwitcher from '@/shared/components/ThemeSwitcher';

const FakeNavigation = () => {
  return (
    <nav className='fake-nav relative flex-center w-full h-[55px] bg-white dark:bg-[#1c2330]'>
      <img src={logo} height='48' width='48' alt='Logo' />
      <ThemeSwitcher />
    </nav>
  );
};

export default FakeNavigation;
