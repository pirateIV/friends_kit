import { useState } from 'react';
import { Avatar } from '@material-tailwind/react';
import { CheckIcon } from '@radix-ui/react-icons';
import GeneralSettings from '@/components/layout/settings/GeneralSettings';
import SecuritySettings from '@/components/layout/settings/SecuritySettings';
import AccountSettings from '@/components/layout/settings/AccountSettings';
import PrivacySettings from '@/components/layout/settings/PrivacySettings';
import Preferences from '@/components/layout/settings/Preferences';
import Notifications from '@/components/layout/settings/Notifications';
import HelpSettings from '@/components/layout/settings/HelpSettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const settingsTabs = [
  { id: 1, section: 'general', tabIcon: '', tab: <GeneralSettings /> },
  { id: 2, section: 'security', tabIcon: '', tab: <SecuritySettings /> },
  { id: 3, section: 'personal', tabIcon: '', tab: <AccountSettings /> },
  { id: 4, section: 'privacy', tabIcon: '', tab: <PrivacySettings /> },
  { id: 5, section: 'preferences', tabIcon: '', tab: <Preferences /> },
  { id: 6, section: 'notifications', tabIcon: '', tab: <Notifications /> },
  { id: 7, section: 'help', tabIcon: '', tab: <HelpSettings /> },
];

const TabList = ({ tab, handleClick }) => {
  return (
    <li
      key={tab.id}
      id={tab.section}
      className='flex items-center cursor-pointer font-montserrat '
      data-section={`${tab.section}`}>
      <a
        href={`#${tab.section}`}
        className='first-letter:uppercase py-[14px] px-10 w-full hover:bg-gray-100 border-l-8 border-transparent'
        onClick={handleClick}>
        <span className='text-[.8rem] text-[#a5a5a5] font-semibold'>{tab.section}</span>
      </a>
    </li>
  );
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState(1);

  // const handleTabClick = () => {
  //   setActiveTab();
  // };
  return (
    <div className='settings'>
      <div className='settings-sidebar'>
        <div className='user-block'>
          <div className='avatar'>
            <Avatar
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
              className='h-[58px] w-[58px] rounded-full'
              alt=''
            />
            <div className='user leading-[1]'>
              <h4 className='name'>John Doe</h4>
              <small className='text-xs text-gray-500'>Melbourne, AU</small>
            </div>
            <FontAwesomeIcon icon={faCheck} className='badge' />
          </div>
        </div>

        {/* for an active class: text-[#393a4f] */}

        <div className='user-menu overflow-scroll'>
          <div className='menu-block py-5'>
            <ul>
              {settingsTabs.slice(0, 3).map((tab) => (
                <TabList
                  key={tab.id}
                  tab={tab}
                  handleClick={() => setActiveTab(tab.id)}
                />
              ))}
            </ul>
          </div>
          <div className=' divide-y divide-gray-600'></div>
          <div className='menu-block py-5'>
            <ul>
              {settingsTabs.slice(3, 5).map((tab) => (
                <TabList
                  key={tab.id}
                  tab={tab}
                  handleClick={() => setActiveTab(tab.id)}
                />
              ))}
            </ul>
          </div>
          <div className=' divide-y divide-gray-600'></div>
          <div className='menu-block py-5'>
            <ul>
              {settingsTabs.slice(5, 7).map((tab) => (
                <TabList
                  key={tab.id}
                  tab={tab}
                  handleClick={() => setActiveTab(tab.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {settingsTabs.map((tab) => (tab.id === activeTab ? tab.tab : null))}
    </div>
  );
};

export default Settings;
