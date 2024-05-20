import { useEffect, useRef, useState } from "react";
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
import { Button, Timeline } from "flowbite-react";

import Feed from "@/components/feed/Feed";
import CreatePostBannner from "@/components/layout/posts/CreatePostBanner";
import useCustomLocation from "@/hooks/useCustomLocation";
import { useParams } from "react-router-dom";
import AboutTab from "./profile/AboutTab";
import PostsTab from "./profile/PostsTab";

const UserProfileMain = ({ children }) => {
  const { name, user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const { userId } = useParams();
  console.log(userId);

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

  const isProfile = useCustomLocation("app/@me");
  console.log(isProfile);

  return (
    <>
      <div className="profile-content">
        <div {...profileProps}>
          <ProfileHeader triggerModal={triggerModal} />
          <ProfileMenu />
          <ProfileSubHeader />

          <BannerUploadModal
            dialogTrigger={dialogTrigger}
            dialogClose={dialogClose}
            triggerPcUpload={triggerPcUpload}
          />
          <UploadFromPcModal pcUploadTrigger={pcUploadTrigger} />
        </div>
        <div className="mt-4">
          <div className="max-w-[1140px] mx-auto border-t border-gray-400 dark:border-gray-700">
            <Tabs aria-label="Tabs with icons" style="underline">
              <Tabs.Item active title="Posts">
                <PostsTab />
              </Tabs.Item>
              <Tabs.Item title="About">
                <AboutTab />
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
              {isProfile && (
                <Tabs.Item title="Settings">
                  This is{" "}
                  <span className="font-medium text-gray-800 dark:text-white">
                    Contacts tab's associated content
                  </span>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </Tabs.Item>
              )}
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

const UserDetails = () => {
  return <h1>User Details</h1>;
};

UserProfileMain.propTypes = {
  children: PropTypes.node,
};

export default UserProfileMain;
