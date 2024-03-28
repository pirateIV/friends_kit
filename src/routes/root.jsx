import { useDispatch, useSelector } from 'react-redux';
import Navigation from '@/components/NavigationBar/Navigation';
import { useEffect } from 'react';
import { getAllUsers } from '@/auth/reducers/users/usersSlice';

const Root = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <main>
      <div className='min-h-screen w-full bg-gray-200'>
        <Navigation />
        <div>
          <h1>User List</h1>
          <ul>
            {users?.map((user) => (
              <div key={user.id}>
                <img src={user.avatar} alt='' />
                <li>
                  {user.firstName}
                  {user.lastName}
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
