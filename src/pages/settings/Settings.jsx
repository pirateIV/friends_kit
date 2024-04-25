import { useState } from 'react';
import GeneralSettings from '@/components/layout/GeneralSettings';
import { tab } from '@material-tailwind/react';

const settingsTabs = [{ id: 1, tab: <GeneralSettings /> }];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = () => {
    setActiveTab();
  };
  return (
    <div className='settings'>
      <div className='settings-sidebar'>
        <div className='user-block'>
          <div className="avatar">
            
          </div>
        </div>
      </div>
      {settingsTabs.map((tab) => (tab.id === activeTab ? tab.tab : null))}
    </div>
  );
};

export default Settings;
