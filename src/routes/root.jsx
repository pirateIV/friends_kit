import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navigation from '@/components/NavigationBar/Navigation';

const Root = () => {
  const auth = useAuth();
  const location = useLocation();
  
  return auth.user ? (
    <main>
      <div className='relative w-full h-full bg-[#f4f4f4] dark:bg-[#2f3b50]'>
        <Navigation />
        <Outlet />
      </div>
    </main>
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default Root;
