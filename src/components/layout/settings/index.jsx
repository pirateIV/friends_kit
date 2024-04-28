import UserIcon from '@/shared/components/icons/UserIcon';
import GlobeIcon from '@/shared/components/icons/GlobeIcon';
import MapPinIcon from '@/shared/components/icons/MapPinIcon';
import MessageIcon from '@/shared/components/icons/MessageIcon';

export const settingsInputList = [
  {  span: "col-span-2",id: 1, name: 'first-name', label: 'FIRST NAME', icon: <UserIcon /> },
  {  span: "col-span-2",id: 2, name: 'last-name', label: 'LAST NAME', icon: <UserIcon /> },
  {  span: "col-span-2",id: 3, name: 'email', label: 'EMAIL', icon: <MessageIcon /> },
  {  span: "col-span-2",id: 4, name: 'backup-email', label: 'BACKUP EMAIL', icon: <MessageIcon /> },
  {  span: "col-span-2",id: 5, name: 'city', label: 'CITY', icon: <MapPinIcon /> },
  {  span: "col-span-2",id: 6, name: 'country', label: 'COUNTRY', icon: <GlobeIcon /> },
];