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
      span: 'col-span-2',
      id: 1,
      name: 'firstName',
      label: 'FIRST NAME',
      icon: <UserIcon />,
      value: user.firstName,
    },
    {
      span: 'col-span-2',
      id: 2,
      name: 'lastName',
      label: 'LAST NAME',
      icon: <UserIcon />,
      value: user.lastName,
    },
    {
      span: 'col-span-2',
      id: 3,
      name: 'email',
      label: 'EMAIL',
      icon: <MessageIcon />,
      value: user.email,
    },
    {
      span: 'col-span-2',
      id: 4,
      name: 'backupEmail',
      label: 'BACKUP EMAIL',
      icon: <MessageIcon />,
      value: '',
    },
    {
      span: 'col-span-2',
      id: 5,
      name: 'city',
      label: 'CITY',
      icon: <MapPinIcon />,
      value: '',
    },
    {
      span: 'col-span-2',
      id: 6,
      name: 'country',
      label: 'COUNTRY',
      icon: <GlobeIcon />,
      value: '',
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
