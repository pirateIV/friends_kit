import setDocumentTitle from '@/helpers/setDocumentTitle';
import Dropdown from '@/components/profile/friends/Dropdown';
import SearchInput from '@/components/profile/friends/SearchInput';
import FriendsList from '@/components/profile/friends/FriendsList';
import { header } from '..';

const Friends = () => {
  setDocumentTitle('profile-friends');

  return (
    <section>
      <header>
        <div className={header.childClass}>
          <Dropdown />
          <SearchInput />
        </div>
      </header>
      <FriendsList />
    </section>
  );
};

export default Friends;
