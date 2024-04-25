import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/auth/reducers/login/loginSlice';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
