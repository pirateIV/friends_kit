import flag from './icon/flag.svg';
import lock from './icon/lock.svg';
import user from './icon/user.svg';
import account from './icon/account.svg';
import profile from './icon/profile.svg';

import mailbox from './cards/mailbox.svg';

import type1 from '../../images/signup/cards/type-1.svg';
import type2 from '../../images/signup/cards/type-2.svg';
import type3 from '../../images/signup/cards/type-3.svg';

export const steps = [
  { id: 1, icon: account },
  { id: 2, icon: user },
  { id: 3, icon: profile },
  { id: 4, icon: lock },
  { id: 5, icon: flag },
];

export const accountTypes = [
  { id: 1, type: 'company', title: 'Company', illustration: type1 },
  { id: 2, type: 'public', title: 'Public Person', illustration: type2 },
  { id: 3, type: 'personal', title: 'Personal', illustration: type3 },
];

