import { useSelector } from 'react-redux';
import SettingsLayout from './SettingsLayout';
import SettingsInput from '@/components/ui/SettingsInput';
import LockIcon from '@/shared/components/icons/LockIcon';
import PhoneIcon from '@/shared/components/icons/PhoneIcon';
import { selectCurrentUser } from '@/features/auth/reducers/login/loginSlice';

const SecuritySettings = () => {
  const user = useSelector(selectCurrentUser);

  let inputList = [
    // { id: 1, label: 'CURRENT PASSWORD', span: 'col-span-4', value: user.password },
    { id: 2, label: 'NEW PASSWORD', span: 'col-span-2', value: '', icon: <LockIcon /> },
    {
      id: 3,
      label: 'REPEAT PASSWORD',
      span: 'col-span-2',
      value: '',
      icon: <LockIcon />,
    },
    { id: 4, label: 'PHONE NUMBER', span: 'col-span-2', value: '', icon: <PhoneIcon /> },
  ];

  return (
    <SettingsLayout tab='2' id='security-settings' title='Security'>
      <div>
        <div className='grid grid-cols-4 gap-x-4'>
          {inputList.slice(0, 2).map((input) => (
            <SettingsInput
              key={input.id}
              span={input.span}
              label={input.label}
              value={input.value}
              icon={input.icon}
            />
          ))}
          <p className='form-text col-span-4'>
            You can enable 2 factor authentication anytime to improve your account privacy
            and security.
          </p>
          {inputList.slice(2, 3).map((input) => (
            <SettingsInput
              key={input.id}
              span={input.span}
              label={input.label}
              value={input.value}
              icon={input.icon}
            />
          ))}
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
