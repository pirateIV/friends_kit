import SettingsInput from '@/components/ui/SettingsInput';
import SettingsLayout from './SettingsLayout';
import LockIcon from '@/shared/components/icons/LockIcon';

let inputList = [
  { id: 1, label: 'CURRENT PASSWORD', span: 'col-span-4' },
  { id: 2, label: 'NEW PASSWORD', span: 'col-span-2' },
  { id: 3, label: 'REPEAT PASSWORD', span: 'col-span-2' },
  { id: 4, label: 'PHONE NUMBER', span: 'col-span-2' },
];

const SecuritySettings = () => {
  return (
    <SettingsLayout tab='2' id='security-settings' title='Security'>
      <div>
        <div className='grid grid-cols-4 gap-x-4'>
          {inputList.map((input) => (
            <SettingsInput
              key={input.id}
              span={input.span}
              label={input.label}
              icon={<LockIcon />}
            />
          ))}
          <p className='form-text col-span-4'>
            You can enable 2 factor authentication anytime to improve your account privacy
            and security.
          </p>
        <div className='settings-buttons mt-5 col-span-4'>
          <button className='bg-green-600 text-white hover:bg-green-700'>
            Save changes
          </button>
          <button className='bg-gray-100 hover:bg-gray-200'>Advanced</button>
        </div>
        </div>

      </div>
    </SettingsLayout>
  );
};

export default SecuritySettings;
