import {
  mdiApps,
  mdiMailbox,
  mdiBellOutline,
  mdiHeartOutline,
  mdiMessageOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import Button from './Button';

const NavbarStart = () => {
  const navIconButtons = [
    mdiHeartOutline,
    mdiBellOutline,
    mdiMailbox,
    mdiMessageOutline,
    mdiApps,
  ];

  return (
    <div className='navbar-start flex items-center gap-6 *:text-gray-400 *:last:text-gray-500 *:last-of-type:text-gray-500 *:h-9 *:w-9 *:rounded-md '>
      {navIconButtons.map((icon, i) => (
        <Button key={i}>
          <Icon path={icon} size={0.9} />
        </Button>
      ))}
    </div>
  );
};

export default NavbarStart;
