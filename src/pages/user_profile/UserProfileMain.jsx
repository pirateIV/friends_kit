import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { profileProps } from "..";
import ProfileMenu from "@/components/ProfileMenu";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileSubHeader from "@/components/ProfileSubHeader";
import BannerUploadModal, {
  UploadFromPcModal,
} from "@/components/modals/banner_modals";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { getAllUserPosts } from "@/features/auth/reducers/posts/postsSlice";

const UserProfileMain = ({ children }) => {
  const { name, user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.posts);

  const dialogTrigger = useRef();
  const dialogClose = useRef();
  const pcUploadTrigger = useRef();

  const triggerModal = () => {
    dialogTrigger.current.click();
  };

  const triggerPcUpload = () => {
    pcUploadTrigger.current.click();
    dialogClose.current.click();
  };

  useEffect(() => {
    dispatch(getAllUserPosts());
    console.log(userPosts);
  }, []);

  return (
    <>
      <div className="profile-content">
        <div {...profileProps}>
          <ProfileHeader triggerModal={triggerModal} />
          <ProfileMenu />
          <ProfileSubHeader />

          {/* modals */}
          <BannerUploadModal
            dialogTrigger={dialogTrigger}
            dialogClose={dialogClose}
            triggerPcUpload={triggerPcUpload}
          />
          <UploadFromPcModal pcUploadTrigger={pcUploadTrigger} />
          {/* {location.pathname !== "/app" ? children : <UserDetails />} */}
        </div>
        <div className="mt-4 ">
          <div className="max-w-[1140px] mx-auto border-t border-gray-400">
            <Tabs aria-label="Tabs with icons" style="underline">
              <Tabs.Item active title="Posts">
                <div className="grid grid-cols-12 w-full gap-5">
                  <div className="flex flex-col gap-5 col-span-5">
                    <UserPhotos />
                    <UserFriends />
                    <UserSettings />
                  </div>
                  <div className="col-span-7">
                    <h4 className="text-lg dark:text-gray-200">Posts</h4>

                    <div className="user-posts-list"></div>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="About">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Friends">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Photos">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

const UserPhotos = () => {
  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] h-40 shadow-mui-1 py-3 px-4 rounded-md">
      <div className="header flex items-center justify-between">
        <h4 className="font-semibold dark:text-gray-300">Photos</h4>
        <a href="" className="text-sm text-blue-500">
          See all photos
        </a>
      </div>

      <div className="photo-list"></div>
    </div>
  );
};

const UserFriends = () => {
  const { user } = useSelector(selectCurrentUser);
  // console.log(user.friends);
  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] h-40 shadow-mui-1 py-3 px-4 rounded-md">
      <div className="header flex items-center justify-between">
        <h4 className="font-semibold dark:text-gray-300">Friends</h4>
        <a href="" className="text-sm text-blue-500">
          See all friends
        </a>
      </div>
      <p className="friends-count text-sm">{user.friends.length} friends</p>

      {/* <div className="friends-list">
        {user.friends.map((f, i) => (
          <div>{f.firstName}</div>
        ))}
      </div> */}
    </div>
  );
};

const UserSettings = () => {
  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] h-auto shadow-mui-1 py-3 px-4 rounded-md">
      <div className="header">
        <h4 className="font-semibold dark:text-gray-300">Settings</h4>
      </div>
      <div className="button-settings mt-3 flex flex-col gap-2 items-start justify-center *:block *:py-1.5 *:bg-blue-400 dark:*:text-blue-300 dark:*:font-normal dark:*:bg-blue-800 *:border-t dark:*:border-blue-600 *:w-full *:rounded-md *:text-sm *:font-medium *:text-center">
        <button className="hover:bg-blue-400/90 dark:hover:bg-blue-800/90">
          Add bio
        </button>
        <button className="hover:bg-blue-400/90 dark:hover:bg-blue-800/90">
          Edit Details
        </button>
        <Link
          className="hover:bg-blue-400/90 dark:hover:bg-blue-800/90"
          to="settings"
          type="button"
        >
          Go to settings
        </Link>
      </div>
    </div>
  );
};

const UserDetails = () => {
  return <h1>User Details</h1>;
};

UserProfileMain.propTypes = {
  children: PropTypes.node,
};

export default UserProfileMain;
