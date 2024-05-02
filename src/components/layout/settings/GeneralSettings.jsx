import InputGroup from './InputGroup';
import SettingsLayout from './SettingsLayout';

const GeneralSettings = () => {
  
  return (
    <SettingsLayout tab='1' id='general-settings' title='General Settings'>
      <div className='grid grid-cols-4 gap-x-4'>
        <InputGroup start='0' end='4' />

        <div className='field !pb-0 col-span-4'>
          <label htmlFor='address'>ADDRESS</label>
          <textarea
            name='address'
            className='w-full -mt-1 translate-y-2 h-full text-[.9rem] outline-none px-4'
            placeholder='Fill in your address...'
            cols='30'
            rows='3'></textarea>
        </div>

        <p className='form-text col-span-4'>
          Be sure to fill out your location settings. This will help us suggest you
          relevant friends and places you could like.
        </p>

        <InputGroup start='4' end='6' />

        <div className='settings-buttons mt-5 col-span-4'>
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
