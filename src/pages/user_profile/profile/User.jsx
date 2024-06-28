import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { selectCurrentUserProfile } from "@/features/auth/reducers/user/userProfileSlice";
import useCustomLocation from "@/hooks/useCustomLocation";
import useUserData from "@/hooks/useUserData";
import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserPhotos = () => {
  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] shadow-tiny border-t dark:border-gray-800 h-40 py-3 px-4 rounded-md">
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

export const UserFriends = () => {
  const userData = useUserData();
  const { user } = useSelector(selectCurrentUser);

  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] shadow-tiny border-t dark:border-gray-800 min-h-40 py-3 px-4 rounded-md">
      <div>
        <div className="header flex items-center justify-between">
          <h4 className="font-semibold dark:text-gray-300">Friends</h4>
          <a href="" className="text-sm text-blue-500">
            See all friends
          </a>
        </div>
        <p className="friends-count text-sm">
          {userData?.friends.length} friends
        </p>
      </div>
      <div className="mt-4 grid grid-cols-4">
        {userData?.friends.map((friend) => (
          <div key={friend.id} className="friend-item col-span-1">
            <Link
              to={user.id === friend.id ? "/@me" : `/user/${friend.id}`}
              className="flex flex-col items-center text-center"
            >
              <Avatar size="lg" />
              <small className="friend-name dark:text-gray-300">
                {friend.id === user.id
                  ? "You"
                  : `${friend.firstName} ${friend.lastName}`}
              </small>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const UserSettings = () => {
  return (
    <div className="user-photos bg-white dark:bg-[#1c232e] shadow-tiny border-t dark:border-gray-800 h-auto py-3 px-4 rounded-md">
      <div className="header">
        <h4 className="font-semibold dark:text-gray-300">Settings</h4>
      </div>
      <div className="button-settings mt-3 flex flex-col gap-2 items-start justify-center *:block *:py-1.5 *:bg-blue-400 dark:*:text-gray-100 dark:*:font-normal dark:*:bg-blue-800 *:border-t dark:*:border-blue-600 *:w-full *:rounded-md *:text-sm *:font-medium *:text-center">
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
