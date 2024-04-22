import { profileProps } from '..';
import ProfileMenu from '@/components/ProfileMenu';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSubHeader from '@/components/ProfileSubHeader';

const UserProfileMain = ({ children }) => {
  return (
    <div {...profileProps}>
      <ProfileHeader />
      <ProfileMenu />
      <ProfileSubHeader />
      {children}
    </div>
  );
};

export default UserProfileMain;
