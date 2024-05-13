import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { profileProps } from "..";
import ProfileMenu from "@/components/ProfileMenu";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileSubHeader from "@/components/ProfileSubHeader";
import BannerUploadModal, {
  UploadFromPcModal,
} from "@/components/modals/banner_modals";
import { Avatar, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { getAllUserPosts } from "@/features/auth/reducers/posts/postsSlice";
import { Button, Timeline } from "flowbite-react";

import photo from "@/assets/images/photo.png";
import feeling from "@/assets/images/feeling.png";
import liveVideo from "@/assets/images/live-video.png";

const UserProfileMain = ({ children }) => {
  const { name, user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

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
  }, []);

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#999",
  };

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

                    <div id="create-post" aria-label="Create a Post">
                      <div className="bg-white p-3 shadow-mui-1 rounded-md space-y-3 divide-y divide-gray-300 dark:divide-gray-700 dark:bg-[#1c232e]">
                        <div className="create-post-header flex items-center gap-4 *:flex-shrink-0">
                          <div className="avatar w-10 h-10 overflow-hidden rounded-full">
                            <Avatar />
                          </div>
                          <input
                            type="text"
                            className="flex-1 border-t bg-gray-200 p-2.5 cursor-pointer rounded-full outline-none focus:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:focus:bg-gray-800/80"
                            placeholder={`What's on your mind, ${user.firstName} ?`}
                          />
                        </div>
                        <div className="create-post-footer">
                          <div className="post-types flex items-center justify-center *:flex-1 *:gap-3 gap-3 *:text-sm text-gray-600 *:flex-center *:py-1 *:rounded-md pt-1">
                            <button className="hover:bg-gray-300">
                              <img width="20" height="20" src={photo} alt="" />
                              <span>Live video</span>
                            </button>
                            <button className="hover:bg-gray-300">
                              <img
                                width="20"
                                height="20"
                                src={feeling}
                                alt=""
                              />
                              <span>Photo/video</span>
                            </button>
                            <button className="hover:bg-gray-300">
                              <img
                                width="20"
                                height="20"
                                src={liveVideo}
                                alt=""
                              />
                              <span>Feeling/activity</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="user-posts-list">
                      <Timeline>
                        {posts &&
                          posts.map((post) => (
                            <Timeline.Item
                              key={post._id}
                              className="bg-white shadow-mui-1 text-sm my-5 rounded-md dark:text-gray-200 dark:bg-[#1c232e]"
                            >
                              <Timeline.Point />
                              <Timeline.Content>
                                <div className="post-header p-4 mb-1">
                                  <div className="mini-post-header flex items-center gap-3">
                                    <div className="avatar w-10 h-10 overflow-hidden rounded-full">
                                      <Avatar />
                                    </div>
                                    <div>
                                      <h5 className="header-title">You</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4">{post.content}</div>
                                <div className="image">
                                  <img
                                    src={
                                      "@/c8c70e92-d705-4279-932b-2c30ed62da2c.jpg"
                                    }
                                    height="300"
                                    alt=""
                                  />
                                </div>
                                <div className="post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-4 pt-2 dark:border-gray-700">
                                  <div>
                                    <button style={buttonStyles}>
                                      <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                          backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/mJW0r_GFye-.png?_nc_eui2=AeHHvosbKnrsYwroyxlczufaZq-ImSmmtj1mr4iZKaa2PZX8SZibZ1v52nDkujEXee_7iPbyKr0G_aQ0dVowBI4S")`,
                                          backgroundPosition: "0px -718px",
                                          backgroundSize: "auto",
                                          width: "20px",
                                          height: "20px",
                                          backgroundRepeat: "no-repeat",
                                          display: "inline-block",
                                          opacity: "0.6",
                                        }}
                                      ></i>
                                      Like
                                    </button>
                                  </div>
                                  <div>
                                    <button style={buttonStyles}>
                                      <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                          backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/mJW0r_GFye-.png?_nc_eui2=AeHHvosbKnrsYwroyxlczufaZq-ImSmmtj1mr4iZKaa2PZX8SZibZ1v52nDkujEXee_7iPbyKr0G_aQ0dVowBI4S")`,
                                          backgroundPosition: "0px -529px",
                                          backgroundSize: "auto",
                                          width: "20px",
                                          height: "20px",
                                          backgroundRepeat: "no-repeat",
                                          display: "inline-block",
                                          opacity: "0.6",
                                        }}
                                      ></i>
                                      Comment
                                    </button>
                                  </div>
                                  <div>
                                    <button style={buttonStyles}>
                                      <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                          backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/mJW0r_GFye-.png?_nc_eui2=AeHHvosbKnrsYwroyxlczufaZq-ImSmmtj1mr4iZKaa2PZX8SZibZ1v52nDkujEXee_7iPbyKr0G_aQ0dVowBI4S")`,
                                          backgroundPosition: "0px -865px",
                                          backgroundSize: "auto",
                                          width: "20px",
                                          height: "20px",
                                          backgroundRepeat: "no-repeat",
                                          display: "inline-block",
                                          opacity: "0.6",
                                        }}
                                      ></i>
                                      Share
                                    </button>
                                  </div>
                                </div>
                              </Timeline.Content>
                            </Timeline.Item>
                          ))}
                      </Timeline>
                    </div>
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
