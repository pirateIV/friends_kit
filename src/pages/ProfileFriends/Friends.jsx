import { header } from "..";
import Dropdown from "@/components/profile/friends/Dropdown";
import SearchInput from "@/components/profile/friends/SearchInput";
import FriendsList from "@/components/profile/friends/FriendsList";
import UserProfileMain from "../user_profile/UserProfileMain";

const Friends = () => {
  return (
    <>
      <UserProfileMain>
        <section>
          <header>
            <div {...header}>
              <Dropdown />
              <SearchInput />
            </div>
          </header>
          <FriendsList />
        </section>
      </UserProfileMain>
    </>
  );
};

export default Friends;
