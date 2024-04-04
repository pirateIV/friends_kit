import { useEffect, useRef, useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import SearchIcon from '@/shared/components/icons/SearchIcon';
import avatar from '@/assets/images/avatar-w.webp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessage,
  faHeart,
  faBell,
  faCoffee,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownItem } from 'flowbite-react';

const friendsArray = [
  {
    name: 'Milly Augustine',
    location: 'From Rome',
    imgSrc: 'assets/img/avatars/milly.jpg',
    dataUserPopover: 7,
  },
  {
    name: 'Dan Walker',
    location: 'From New York',
    imgSrc: 'assets/img/avatars/dan.jpg',
    dataUserPopover: 1,
  },
  {
    name: 'Stella Bergmann',
    location: 'From Berlin',
    imgSrc: 'assets/img/avatars/stella.jpg',
    dataUserPopover: 2,
  },
  {
    name: 'David Kim',
    location: 'From Chicago',
    imgSrc: 'assets/img/avatars/david.jpg',
    dataUserPopover: 4,
  },
  {
    name: 'Daniel Wellington',
    location: 'From London',
    imgSrc: 'assets/img/avatars/daniel.jpg',
    dataUserPopover: 3,
  },
  {
    name: 'Nelly Schwartz',
    location: 'From Melbourne',
    imgSrc: 'assets/img/avatars/nelly.png',
    dataUserPopover: 9,
  },
  {
    name: 'Rolf Krupp',
    location: 'From Berlin',
    imgSrc: 'assets/img/avatars/rolf.jpg',
    dataUserPopover: 13,
  },
  {
    name: 'Brian Stevenson',
    location: 'From San Diego',
    imgSrc: 'assets/img/avatars/brian.jpg',
    dataUserPopover: 19,
  },
  {
    name: 'Bobby Brown',
    location: 'From Paris',
    imgSrc: 'assets/img/avatars/bobby.jpg',
    dataUserPopover: 8,
  },
  {
    name: 'Azzouz El Paytoun',
    location: 'From Montreal',
    imgSrc: 'assets/img/avatars/azzouz.jpg',
    dataUserPopover: 20,
  },
  {
    name: 'Elise Walker',
    location: 'From London',
    imgSrc: 'assets/img/avatars/elise.jpg',
    dataUserPopover: 6,
  },
  {
    name: 'Aline Cambell',
    location: 'From Seattle',
    imgSrc: 'assets/img/avatars/aline.jpg',
    dataUserPopover: 16,
  },
  {
    name: 'Mike Lasalle',
    location: 'From Toronto',
    imgSrc: 'assets/img/avatars/mike.jpg',
    dataUserPopover: 12,
  },
  {
    name: 'Mike Donovan',
    location: 'From San Francisco',
    imgSrc: 'assets/img/avatars/michael.jpg',
    dataUserPopover: 17,
  },
  {
    name: 'Lana Henrikssen',
    location: 'From Helsinki',
    imgSrc: 'assets/img/avatars/lana.jpeg',
    dataUserPopover: 10,
  },
  {
    name: 'Leana Marks',
    location: 'From Nashville',
    imgSrc: 'assets/img/avatars/leana.jpg',
    dataUserPopover: 15,
  },
  {
    name: 'Ken Rogers',
    location: 'From Chicago',
    imgSrc: 'assets/img/avatars/ken.jpg',
    dataUserPopover: 14,
  },
  {
    name: 'Gaelle Morris',
    location: 'From Lyon',
    imgSrc: 'assets/img/avatars/gaelle.jpeg',
    dataUserPopover: 11,
  },
  {
    name: 'Edward Mayers',
    location: 'From Dublin',
    imgSrc: 'assets/img/avatars/edward.jpeg',
    dataUserPopover: 5,
  },
];

const dropdownItems = [
  {
    title: 'Close Friends',
    icon: <FontAwesomeIcon icon={faHeart} />,
    description: 'your closest friends list',
  },
  {
    title: 'Followed',
    icon: <FontAwesomeIcon icon={faBell} />,
    description: 'Friends you are following',
  },
  {
    title: 'Work relations',
    icon: <FontAwesomeIcon icon={faCoffee} />,
    description: 'Your work relations',
  },
  {
    title: 'Friend Requests',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    description: 'Your pending friend requests',
  },
];

const Friends = () => {
  useDocumentTitle('profile-friends');
  const dropdownRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFriends, setFilteredFriends] = useState([...friendsArray]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = friendsArray.filter((friend) =>
      friend.name.toLowerCase().includes(query)
    );
    setFilteredFriends(filtered);
  };

  return (
    <section className='friends-list'>
      <header>
        <div className='flex items-center justify-between mt-3 ps-4 p-2 bg-white rounded-md shadow-tiny'>
          <div className='dropdown'>
            <Dropdown
              label=''
              className='w-72 z-40 rounded-xl'
              renderTrigger={() => (
                <span className='cursor-pointer bg-gray-100 p-2 pe-8 text-sm rounded-full'>
                  All Friends
                </span>
              )}
              inline>
              <div id='dropdown-main' ref={dropdownRef}>
                {dropdownItems.map((item, index) => (
                  <DropdownItem key={index}>
                    <div className='flex items-center gap-3'>
                      <span>{item.icon}</span>
                      <div className='flex flex-col items-start'>
                        <h3>{item.title}</h3>
                        <small className='text-[.875em] text-[#a2a59b]'>
                          {item.description}
                        </small>
                      </div>
                    </div>
                  </DropdownItem>
                ))}
              </div>
            </Dropdown>
          </div>
          <div className='relative w-64 me-3' id='search-friends-input'>
            <input
              id='search'
              type='search'
              className='peer block w-full p-1.5 ps-9 text-sm text-gray-800 bg-white border border-gray-300 rounded-full outline-none  focus:border focus:border-blue-600 focus:shadow-sm transition-03'
              placeholder='Search'
              onChange={(e) => handleSearch(e)}
            />
            <div
              id='icon'
              className='absolute search-icon inset-y-0 start-0 flex items-center ps-3 p-2 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03'>
              <SearchIcon cs='w-4 h-4' />
              <span className='sr-only'>Search icon</span>
            </div>
          </div>
        </div>
      </header>

      <div className='friends-grid'>
        {filteredFriends.length > 0 ? (
          <div className='friend-item grid grid-cols-4 text-center mt-4'>
            {filteredFriends.map((friend, i) => (
              <div className='p-2' key={i}>
                <div className='group flex flex-col items-center justify-center text-center p-[30px] bg-white border border-gray-300 rounded-md hover:shadow-lg'>
                  <Link to='#'>
                    <div className='relative flex-center h-[90px] w-[90px]'>
                      <img
                        src={friend.imgSrc ? avatar : friend.imgSrc}
                        alt={friend.name}
                        className='relative rounded-full h-20 w-20 mx-auto z-20'
                      />
                      <button
                        className='chat-buton absolute z-20 h-9 w-9 bottom-0 right-0 flex-center bg-blue-600 border-[3px] border-white rounded-full scale-0 group-hover:scale-100'
                        style={{ transition: 'all 0.3s ease' }}>
                        <FontAwesomeIcon
                          icon={faMessage}
                          className='text-white h-3 w-3 scale-0 group-hover:scale-100'
                        />
                      </button>
                      <div
                        className='circle border h-10 w-10 border-gray-400/85 rounded-full absolute inset-0 m-auto group-hover:h-full group-hover:w-full z-10'
                        style={{ transition: 'all 0.3s ease' }}></div>
                    </div>
                  </Link>
                  <h3 className='font-montserrat mt-1.5 font-medium text-[.9rem]'>
                    {friend.name}
                  </h3>
                  <p className='text-sm text-gray-500'>{friend.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className='mt-5 text-center'>Could not find result for, "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Friends;
