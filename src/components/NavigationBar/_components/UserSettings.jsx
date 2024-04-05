import DropdownItem from './DropdownItem';

import HelpIcon from '@/shared/components/icons/HelpIcon';
import LogoutIcon from '@/shared/components/icons/LogoutIcon';
import SettingsIcon from '@/shared/components/icons/SettingsIcon';

const UserSettings = () => {
  const dropdownItems = [
    {
      icon: <SettingsIcon />,
      title: 'Settings',
      description: 'Access widget settings',
    },
    {
      icon: <HelpIcon />,
      title: 'Help',
      description: 'Contact our support',
    },
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      description: 'Log out from your account',
    },
  ];

  return (
    <div className='user-settings'>
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index}>
          {item.icon}
          <div className='text-[#393a4f]' style={{ lineHeight: 1.1 }}>
            <h4 className='text-[.8rem] font-medium' id='user-name'>
              {item.title}
            </h4>
            <small className='text-[.75rem]'>{item.description}</small>
          </div>
        </DropdownItem>
      ))}
    </div>
  );
};

export default UserSettings;
