import UserIcon from '@/shared/components/icons/UserIcon';
import GlobeIcon from '@/shared/components/icons/GlobeIcon';
import MapPinIcon from '@/shared/components/icons/MapPinIcon';
import MessageIcon from '@/shared/components/icons/MessageIcon';

export const settingInputList = [
  { id: 1, name: 'first-name', label: 'FIRST NAME', icon: <UserIcon /> },
  { id: 2, name: 'last-name', label: 'LAST NAME', icon: <UserIcon /> },
  { id: 3, name: 'email', label: 'EMAIL', icon: <MessageIcon /> },
  { id: 4, name: 'backup-email', label: 'BACKUP EMAIL', icon: <MessageIcon /> },
  { id: 5, name: 'city', label: 'CITY', icon: <MapPinIcon /> },
  { id: 6, name: 'country', label: 'COUNTRY', icon: <GlobeIcon /> },
];