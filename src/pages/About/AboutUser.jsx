import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
import { mdiProgressCheck, mdiApps, mdiSchool, mdiBriefcasePlus } from '@mdi/js';
import setDocumentTitle from '@/helpers/setDocumentTitle';

const btnTabsArrayIcons = [
  { tabContent: 'Overview', icon: mdiProgressCheck },
  { tabContent: 'Personal Info', icon: mdiApps },
  { tabContent: 'Education', icon: mdiSchool },
  { tabContent: 'Jobs', icon: mdiBriefcasePlus },
];

const AboutUser = () => {
  setDocumentTitle('About');

  return (
    <div className='about'>
      <div className='aside-container'>
        <aside className='btn-tabs flex flex-col gap-y-1 px-5'>
          {btnTabsArrayIcons.map((tab) => (
            <NavLink className='w-full inline-flex items-center px-2 py-3 rounded-md text-white bg-[#5596e6] gap-2'>
              <Icon path={tab.icon} size={0.9} />
              <span className='text-sm font-medium'>{tab.tabContent}</span>
            </NavLink>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default AboutUser;
