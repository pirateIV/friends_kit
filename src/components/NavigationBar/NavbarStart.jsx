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
    mdiApps,
    mdiMailbox,
    mdiBellOutline,
    mdiHeartOutline,
    mdiMessageOutline,
  ];

  return (
    <div className='navbar-start flex items-center gap-8 *:text-gray-500'>
      {navIconButtons.map((icon, i) => (
        <button key={i}>
          <Icon path={icon} size={0.9} />
        </button>
      ))}
    </div>
  );
};

export default NavbarStart;
