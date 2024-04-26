import { useSelector } from 'react-redux';
import { getTheme } from '@/redux/reducers/themeReducer';

import UserIcon from '@/shared/components/icons/UserIcon';
import SettingsInput from '@/components/ui/SettingsInput';
import GlobeIcon from '@/shared/components/icons/GlobeIcon';
import MapPinIcon from '@/shared/components/icons/MapPinIcon';
import MessageIcon from '@/shared/components/icons/MessageIcon';
import settings1 from '@/assets/illustrations/settings/1.svg';
import settings1_dark from '@/assets/illustrations/settings/1-dark.svg';

const settingInputList = [
  { id: 1, name: 'first-name', label: 'FIRST NAME', icon: <UserIcon /> },
  { id: 2, name: 'last-name', label: 'LAST NAME', icon: <UserIcon /> },
  { id: 3, name: 'email', label: 'EMAIL', icon: <MessageIcon /> },
  { id: 4, name: 'backup-email', label: 'BACKUP EMAIL', icon: <MessageIcon /> },
  { id: 5, name: 'city', label: 'CITY', icon: <MapPinIcon /> },
  { id: 6, name: 'country', label: 'COUNTRY', icon: <GlobeIcon /> },
];

const GeneralSettings = () => {
  const theme = useSelector(getTheme());

  return (
    <div id='genral-settings' className='settings-section'>
      <div className='settings-panel'>
        <div className='title-wrap text-start'>
          <h2 className='font-montserrat text-[1.2rem] font-medium text-[#999]'>
            General Settings
          </h2>
        </div>

        <div className='settings-form-wrapper'>
          <div className='settings-form'>
            <div className='grid grid-cols-2 gap-x-4'>
              {settingInputList.slice(0, 4).map(({ id, name, icon, label }) => (
                <SettingsInput key={id} name={name} icon={icon} label={label} />
              ))}
            </div>
            <div className='field !pb-0'>
              <label htmlFor='address'>ADDRESS</label>
              <textarea
                name='address'
                className='w-full -mt-1 translate-y-2 h-full text-[.9rem] outline-none px-4'
                placeholder='Fill in your address...'
                cols='30'
                rows='3'></textarea>
            </div>

            <p className='p-3 text-sm max-w-[450px]'>
              Be sure to fill out your location settings. This will help us suggest you
              relevant friends and places you could like.
            </p>

            <div className='grid grid-cols-2 gap-x-4 mt-3'>
              {settingInputList.slice(4, 6).map(({ id, name, icon, label }) => (
                <SettingsInput key={id} name={name} icon={icon} label={label} />
              ))}
            </div>

            <div className='settings-buttons mt-5'>
              <button className='bg-green-600 text-white hover:bg-green-700'>
                Save changes
              </button>
              <button className='bg-gray-100 hover:bg-gray-200'>Advanced</button>
            </div>
          </div>
          <div className='illustration'>
            <img src={theme === 'light' ? settings1 : settings1_dark} alt='' />
            <p className='text-sm m-5 mx-auto'>
              If you&apos;d like to learn more about general settings, you can read about
              it in the{' '}
              <a href='#' className='underline text-blue-500 max-w-[280px]'>
                user guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
