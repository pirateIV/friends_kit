import {
  mdiApps,
  mdiMailbox,
  mdiBellOutline,
  mdiHeartOutline,
  mdiMessageOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

const NavbarStart = () => {
  const navIconButtons = [
    mdiHeartOutline,
    mdiBellOutline,
    mdiMailbox,
    mdiMessageOutline,
    mdiApps,
  ];

  return (
    <div className='navbar-start flex items-center gap-8 *:text-gray-500 *:h-9 *:w-9 *:rounded-md '>
      {navIconButtons.map((icon, i) => (
        <button
          key={i}
          className='inline-flex-center hover:bg-blue-700 hover:text-white hover:first-of-type:bg-red-400'>
          <Icon path={icon} size={0.9} />
        </button>
      ))}
    </div>
  );
};

export default NavbarStart;
