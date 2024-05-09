import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SettingsInput from '@/components/ui/SettingsInput';
import { selectCurrentUser } from '@/features/auth/reducers/login/loginSlice';

import UserIcon from '@/shared/components/icons/UserIcon';
import GlobeIcon from '@/shared/components/icons/GlobeIcon';
import MapPinIcon from '@/shared/components/icons/MapPinIcon';
import MessageIcon from '@/shared/components/icons/MessageIcon';

const InputGroup = ({ start, end }) => {
  const user = useSelector(selectCurrentUser);

  const settingsInputList = [
    {
      id: 1,
      span: 'col-span-2',
      name: 'firstName',
      type:'text',
      label: 'FIRST NAME',
      icon: <UserIcon />,
      disabled: true,
    },
    {
      id: 2,
      span: 'col-span-2',
      name: 'lastName',
      label: 'LAST NAME',
      type:'text',
      icon: <UserIcon />,
      disabled: true,
    },
    {
      id: 3,
      span: 'col-span-2',
      name: 'email',
      type: 'email',
      label: 'EMAIL',
      icon: <MessageIcon />,
      disabled: true,
    },
    {
      id: 4,
      span: 'col-span-2',
      name: 'backupEmail',
      type: 'email',
      disabled: false,
      label: 'BACKUP EMAIL',
      icon: <MessageIcon />,
    },
    {
      id: 5,
      name: 'city',
      type: 'text',
      disabled: false,
      label: 'CITY',
      icon: <MapPinIcon />,
      span: 'col-span-2',
    },
    {
      id: 6,
      type: 'text',
      name: 'country',
      disabled: false,
      label: 'COUNTRY',
      icon: <GlobeIcon />,
      span: 'col-span-2',
    },
  ];

  return (
    <>
      {settingsInputList.slice(start, end).map((input) => (
        <SettingsInput key={input.id} {...input} />
      ))}
    </>
  );
};

InputGroup.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};

export default InputGroup;
