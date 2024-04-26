import { settingInputList } from '.';
import SettingsLayout from './SettingsLayout';
import SettingsInput from '@/components/ui/SettingsInput';

const GeneralSettings = () => {
  return (
    <SettingsLayout id='general settings' title='General Settings'>
      <div>
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
    </SettingsLayout>
  );
};

export default GeneralSettings;
