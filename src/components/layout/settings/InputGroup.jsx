import PropTypes from 'prop-types';
import SettingsInput from '@/components/ui/SettingsInput';
import { selectCurrentUser } from '@/auth/reducers/login/loginSlice';
import { useSelector } from 'react-redux';

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
      name: 'first-name',
      label: 'FIRST NAME',
      icon: <UserIcon />,
      value: user.firstName,
    },
    {
      span: 'col-span-2',
      id: 2,
      name: 'last-name',
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
      name: 'backup-email',
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
