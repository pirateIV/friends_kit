import { useSelector } from 'react-redux';
import Navigation from '@/components/NavigationBar/Navigation';

import { Outlet } from 'react-router-dom';

const Root = () => {
  // const users = useSelector((state) => state.users);
  return (
    <main>
      <div className='relative w-full h-full bg-[#f4f4f4] dark:bg-[#2f3b50]'>
        <Navigation />
        <Outlet />{' '}
      </div>
    </main>
  );
};

export default Root;
