import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '@/assets/images/avatar-w.webp';
import { query } from './searchQuerySlice';

const FriendsList = () => {
  const searchQuery = useSelector((state) => state.query)
  const friends = useSelector((state) => state.usersFilter);

  return (
    <div className='friends-grid'>
      {friends.length > 0 ? (
        <div className='friend-item grid grid-cols-4 text-center mt-4'>
          {friends.map((friend, i) => (
            <div className='p-2' key={i}>
              <div className='group flex flex-col items-center justify-center text-center p-[30px] bg-white border border-gray-300 rounded-md hover:shadow-lg dark:border-[#2f3b50] dark:bg-[#202836]'>
                <Link to='#'>
                  <div className='relative flex-center h-[90px] w-[90px]'>
                    <img
                      src={friend.imgSrc ? avatar : friend.imgSrc}
                      alt={friend.name}
                      className='relative rounded-full h-20 w-20 mx-auto z-20'
                    />
                    <button
                      className='chat-button flex-center absolute z-20 h-9 w-9 bottom-0 right-0  bg-blue-600 group-hover:border-[3px] group-hover:border-white rounded-full scale-0 group-hover:scale-100 dark:group-hover:border-[#202836]'
                      style={{ transition: 'all 0.3s ease' }}>
                      <FontAwesomeIcon icon={faMessage} className='text-white h-3 w-3' />
                    </button>
                    <div
                      className='circle border h-10 w-10 border-gray-400/85 rounded-full absolute inset-0 m-auto group-hover:h-full group-hover:w-full z-10'
                      style={{ transition: 'all 0.3s ease' }}></div>
                  </div>
                </Link>
                <h3 className='font-montserrat mt-1.5 font-medium text-[.9rem] dark:text-gray-50'>
                  {friend.name}
                </h3>
                <p className='text-sm text-gray-500'>{friend.location}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className='mt-5 text-center'>Could not find result for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default FriendsList;
