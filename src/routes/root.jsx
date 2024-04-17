import { useSelector } from 'react-redux';
import Navigation from '@/components/NavigationBar/Navigation';

import { Outlet } from 'react-router-dom';

const Root = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <main>
      <div className='relative w-full h-full bg-[#f4f4f4] dark:bg-[#2f3b50]'>
        <Navigation />
        <Outlet />{' '}
        {/* <Link to='/profile-minimal' >Visit profile minimal</Link> <br />
        <Link to='@me' >Visit user profile</Link> */}
      </div>
    </main>
  );
};

export default Root;
