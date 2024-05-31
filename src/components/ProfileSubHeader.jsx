import useUserData from "@/hooks/useUserData";
import { ClockIcon } from "@radix-ui/react-icons";
import CreatePostModal from "./modals/CreatePostModal";
import { Link } from "react-router-dom";

const ProfileSubHeader = () => {
  const user = useUserData();

  return (
    <>
      <header className="profile-sub-header mt-5 text-center flex items-center justify-between">
        <div className="friends w-1/3 text-start leading-none">
          <h2 className="font-bold text-[1.65rem] font-montserrat text-[#393a4f] dark:text-gray-200">
            {user?.friends.length}
          </h2>
          <small className="uppercase text-xs text-gray-500 font-medium">
            {user?.friends.length === 1 ? "Friend" : "Friends"}
          </small>
        </div>
        <div className="user-name w-1/3 text-center leading-none">
          <h2 className="font-montserrat font-normal text-[1.65rem] text-[#393a4f] dark:text-gray-200">
            {user ? `${user.firstName} ${user.lastName}` : " "}
          </h2>
          {/* <small className="text-[#a2a5b9]">Media Influencer</small> */}
        </div>
        <div className="w-1/3 text-end text-sm font-medium">
          <Link
            to="chat"
            className="inline-flex items-center gap-1 bg-white border border-gray-400 px-4 py-1.5 rounded-lg dark:bg-[#151a23] dark:text-white dark:border-t dark:border-[#414d63] "
          >
            <ClockIcon />
            <span>History</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default ProfileSubHeader;
