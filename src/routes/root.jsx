import { useDispatch, useSelector } from 'react-redux';
import Navigation from '@/components/NavigationBar/Navigation';
import { useEffect } from 'react';
import { getAllUsers } from '@/auth/reducers/users/usersSlice';

import banner from '../assets/images/default-profile-banner.png';

const Root = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <main>
      <div className='min-h-screen relative w-full bg-gray-200'>
        <Navigation />
        <header>
          <section  
            className='mt-1 banner profile-cover h-[300px] bg-cover'
            style={{
              backgroundImage: `url(${banner})`,
            }}></section>
        </header>
        <div className=""></div>
        <div>
          <h1>User List</h1>
          <ul>
            {users?.map((user) => (
              <div key={user.id}>
                <img src={user ? user.avatar : null} />
                <li>
                  {user ? user.firstName : null}
                  {user ? user.lastName : null}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Root;
