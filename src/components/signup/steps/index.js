import type1 from '../../../assets/images/signup/cards/type-1.svg';
import type2 from '../../../assets/images/signup/cards/type-2.svg';
import type3 from '../../../assets/images/signup/cards/type-3.svg';

// Base button class with common styles
const baseBtnClass =
  'flex items-center justify-center text-sm leading-6 font-medium py-2 px-3 !shadow-sm outline-none border-0';

// Previous button class with specific styles
export const prevBtnClass = `${baseBtnClass} bg-gray-600 border border-gray-300 w-20 rounded-md hover:bg-gray-500`;

// Next button class with specific styles
export const nextBtnClass = `${baseBtnClass} bg-blue-600 text-white border border-blue-600 w-20 rounded-md hover:opacity-90 disabled:bg-blue-400`;

export const accountTypes = [
  { id: 1, type: 'company', title: 'Company', illustration: type1 },
  { id: 2, type: 'public', title: 'Public Person', illustration: type2 },
  { id: 3, type: 'personal', title: 'Personal', illustration: type3 },
];

export const stepProps = {
  accountCreated: {
    id: 'account-created',
    title: "You're all set. Ready?",
  },
  authorizeAcct: {
    id: 'authorize',
    title: 'Secure your account.',
  },
  profileUpload: {
    id: 'upload-profile',
    title: 'Upload a Profile picture.',
  },
  selectAcct: {
    id: 'select-account',
    title: 'Welcome, select an account type.',
  },
  userInfo: {
    id: 'user-info',
    title: 'Tell us more about you.',
  },
};
