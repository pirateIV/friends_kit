import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

import { Avatar } from "flowbite-react";
import photo from "@/assets/images/photo.png";
import feeling from "@/assets/images/feeling.png";
import liveVideo from "@/assets/images/live-video.png";

const CreatePostBannner = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div id="create-post" aria-label="Create a Post">
      <div className="bg-white p-3 rounded-md space-y-3 shadow-tiny border-t divide-y divide-gray-300 dark:divide-blue-gray-800 dark:border-gray-800 dark:bg-[#1c232e]">
        <div className="create-post-header flex items-center gap-4 *:flex-shrink-0">
          <div className="avatar w-10 h-10 overflow-hidden rounded-full">
            <Avatar />
          </div>
          <button
            type="button"
            className="flex-1 border-t text-[14px] text-start bg-gray-200 p-2.5 px-3.5 cursor-pointer rounded-full outline-none focus:bg-gray-300 dark:text-gray-500 dark:border-[#3a455b] dark:bg-[#283143]  dark:focus:bg-[#333d53]"
          >
            What's on your mind, {user.firstName}
          </button>
        </div>
        <div className="create-post-footer">
          <div className="post-types flex items-center justify-center *:flex-1 *:gap-3 gap-3 *:text-sm text-gray-600 *:flex-center *:py-1 *:rounded-md pt-1">
            <button className="hover:bg-gray-300  dark:hover:bg-[#2d3546]">
              <img
                width="20"
                height="20"
                src={liveVideo}
                alt="live-video-icon"
              />
              <span>Live video</span>
            </button>
            <button className="hover:bg-gray-300 dark:hover:bg-[#2d3546]">
              <img width="20" height="20" src={photo} alt="photo-icon" />
              <span>Photo/video</span>
            </button>
            <button className="hover:bg-gray-300 dark:hover:bg-[#2d3546]">
              <img width="20" height="20" src={feeling} alt="" />
              <span>Feeling/activity</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostBannner;
