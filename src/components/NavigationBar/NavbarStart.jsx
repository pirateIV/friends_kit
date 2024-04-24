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
    <div className='nav-start'>
      {navIconButtons.map((icon, i) => (
        <Button key={i}>
          <Icon path={icon} size={0.9} />
        </Button>
      ))}
    </div>
  );
};

export default NavbarStart;
