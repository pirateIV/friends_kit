import NavbarEnd from './NavbarEnd';
import NavbarLogo from './NavbarLogo';
import NavbarStart from './NavbarStart';

// import profileBanner from '@/assets/default-profile-'
const Navigation = () => {
  return (
    <nav className='relative h-14 w-full'>
      <section className='fixed top-0 inset-x-0 flex items-center px-1 bg-white border-b border-gray-300 shadow-sm dark:bg-[#1c2330]'>
        <NavbarLogo />
        <div className='w-full ms-3 px-4'>
          <div className='navbar-menu flex items-center justify-between w-full'>
            <NavbarStart />
            <NavbarEnd />
          </div>
        </div>
      </section>
     
    </nav>
  );
};

export default Navigation;
