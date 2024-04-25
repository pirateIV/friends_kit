import UserIcon from '@/shared/components/icons/UserIcon';
import MessageIcon from '@/shared/components/icons/MessageIcon';
import SettingsInput from '@/components/ui/SettingsInput';

const Settings = () => {
  const settingInputList = [
    { id: 1, name: 'first-name', label: 'FIRST NAME', icon: <UserIcon /> },
    { id: 2, name: 'last-name', label: 'LAST NAME', icon: <UserIcon /> },
    { id: 3, name: 'email', label: 'EMAIL', icon: <MessageIcon /> },
    { id: 4, name: 'backup-email', label: 'BACKUP EMAIL', icon: <MessageIcon /> },
  ];
  return (
    <div className='settings'>
      <div className='settings-sidebar'>
        <div className='user-block'></div>
      </div>

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
                {settingInputList.map(({ id, name, icon, label }) => (
                  <SettingsInput key={id} name={name} icon={icon} label={label} />
                ))}
              </div>
                <div className='field !pb-0'>
                  <label htmlFor='address'>ADDRESS</label>
                  <textarea
                    name='address'
                    className='w-full mt-1 text-[1rem] outline-none px-4'
                    placeholder='Fill in your address...'
                    cols='30'
                    rows='3'></textarea>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
