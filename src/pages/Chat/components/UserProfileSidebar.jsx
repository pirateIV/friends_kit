import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { handleUserName } from "@/helpers";
import ProfileSidebarAvatar from "@/components/common/ProfileSidebarAvatar";
import { setShowUserInfo } from "@/features/auth/reducers/chat/chatSlice";
import { useState } from "react";
import { faV } from "@fortawesome/free-solid-svg-icons";

const UserProfileSidebar = () => {
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const { selectedUser, showUserInfo } = useSelector((state) => state.chatRoom);

  return (
    <>
      {selectedUser && (
        <div
          className={cn(
            "user-profile-sidebar absolute inset-y-0 right-0 xl:relative z-40 bg-white dark:bg-[#262626] transition duration-300",
            showUserInfo
              ? "translate-x-0 scale-100"
              : "translate-x-full scale-x-0 !min-w-0 !max-w-0",
          )}
        >
          <div className="">
            <div className="p-4 border-b border-b-[#eaeaf1] dark:border-b-[rgb(51,51,51)]">
              <div className="user-profile-img relative">
                <ProfileSidebarAvatar />

                <div
                  className={cn(
                    selectedUser.avatar ? "overlay-content" : "bg-black/40",
                    "rounded-md flex flex-col absolute inset-0",
                  )}
                >
                  <div className="user-chat-nav p-2">
                    <div className="flex w-full text-white">
                      <div className="flex items-center flex-grow">
                        <button
                          className="bx bx-x w-10 h-10 text-[21px] hover:opacity-55"
                          onClick={() => dispatch(setShowUserInfo())}
                        ></button>
                      </div>
                      <div className="flex items-center flex-shrink-0">
                        <button className="bx bx-dots-vertical-rounded w-10 h-10 text-[21px]"></button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto p-4">
                    <h5 className="mb-1 text-lg text-white font-medium">
                      {handleUserName(selectedUser)}
                    </h5>
                    <div className="flex items-center gap-x-2">
                      <div
                        className={cn(
                          "circle h-2 w-2 rounded-full",
                          selectedUser.online
                            ? "bg-[var(--color-online)]"
                            : "bg-[var(--color-offline)]",
                        )}
                      ></div>
                      <span className="text-sm text-white/70">
                        {selectedUser.online ? "online" : "offline"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-desc p-4">
              <div>
                <button
                  className="flex-center w-full gap-2 text-pink-500"
                  onClick={() => setFavourite(!favourite)}
                >
                  <i
                    className={cn("bx", favourite ? "bxs-heart" : "bx-heart")}
                  ></i>
                  <span className="text-xs text-gray-700 dark:text-white font-medium">
                    FAVOURITE
                  </span>
                </button>
              </div>
              <hr className="my-4 dark:opacity-10" />
              <div>
                <h5 className="mb-2 opacity-90 text-xs font-semibold dark:text-gray-200">
                  STATUS:
                </h5>
                <p className="text-sm opacity-65 dark:text-gray-100">
                  <em className="text-xs">
                    {selectedUser.bio
                      ? selectedUser.bio
                      : "Hey there! I am using Friendskit App."}
                  </em>
                </p>
              </div>
              <hr className="my-4 dark:opacity-10" />
              <div className="space-y-3">
                <h5 className="mb-2 opacity-90 text-xs font-semibold dark:text-gray-200">
                  INFO:
                </h5>
                <div>
                  <p className="text-sm opacity-50 mb-1 dark:text-white">
                    Name
                  </p>
                  <p className="text-sm font-semibold opacity-75 dark:text-white">
                    {handleUserName(selectedUser)}
                  </p>
                </div>
                <div>
                  <p className="text-sm opacity-50 mb-1 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm font-semibold opacity-75 dark:text-white">
                    {selectedUser.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm opacity-50 mb-1 dark:text-white">
                    Location
                  </p>
                  <p className="text-sm font-semibold opacity-75 dark:text-white">
                    {selectedUser.location?.address ? (
                      selectedUser.location?.address
                    ) : (
                      <em className="text-xs opacity-50">NA</em>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserProfileSidebar;
