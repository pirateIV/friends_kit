import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

import { selectCurrentUser } from '@/features/auth/reducers/login/loginSlice';
import GeneralSettings from '@/components/layout/settings/GeneralSettings';
import SecuritySettings from '@/components/layout/settings/SecuritySettings';
import AccountSettings from '@/components/layout/settings/AccountSettings';
import PrivacySettings from '@/components/layout/settings/PrivacySettings';
import Preferences from '@/components/layout/settings/Preferences';
import Notifications from '@/components/layout/settings/Notifications';
import HelpSettings from '@/components/layout/settings/HelpSettings';
import MenuBlock from '@/components/profile/settings/MenuBlock';

const settingsTabs = [
  { id: 1, section: 'general', tab: <GeneralSettings /> },
  { id: 2, section: 'security', tab: <SecuritySettings /> },
  { id: 3, section: 'account', tab: <AccountSettings /> },
  { id: 4, section: 'privacy', tab: <PrivacySettings /> },
  { id: 5, section: 'preferences', tab: <Preferences /> },
  { id: 6, section: 'notifications', tab: <Notifications /> },
  { id: 7, section: 'help', tab: <HelpSettings /> },
];

const Settings = () => {
  const user = useSelector(selectCurrentUser);

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(tab);

  // Update the tab according to URL params
  useEffect(() => {
    if (location.pathname === '/app/@me/settings') {
      navigate(`/app/@me/settings?tab=${activeTab || 'general'}`);
    }
    setActiveTab(tab);
  }, [tab, activeTab, location.pathname, navigate]);

  const avatarSrc =
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80';

  return (
    <div className='settings'>
      <div className='settings-sidebar'>
        <div className='user-block'>
          <div className='avatar'>
            <Avatar src={avatarSrc} className='h-[58px] w-[58px] rounded-full' alt='' />
            {/* <ReactFancyBox image={avatarSrc} className='h-[58px] w-[58px] rounded-full'/> */}
            <div className='user leading-[1]'>
              <h4 className='name text-sm'>{`${user.firstName} ${user.lastName}`}</h4>
              <small className='text-xs text-gray-500'>{user.location || 'NA'}</small>
            </div>
            <FontAwesomeIcon icon={faCheck} className='badge' />
          </div>
        </div>

        <div className='user-menu'>
          <MenuBlock
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={settingsTabs.slice(0, 3)}
          />
          <MenuBlock
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={settingsTabs.slice(3, 5)}
          />
          <MenuBlock
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={settingsTabs.slice(5, 7)}
          />
        </div>
      </div>
      <div className='settings-tabs'>
        {settingsTabs.map((tab) =>
          tab.section === activeTab ? <div key={tab.id}>{tab.tab}</div> : null
        )}
      </div>
    </div>
  );
};

export default Settings;
