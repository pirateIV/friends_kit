import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="profile-menu flex items-center justify-between mt-3">
      <div className="*:border *:border-gray-400 *:py-2 *:w-28 *:rounded-lg *:bg-white dark:*:bg-[#151a23] dark:*:text-white dark:*:border-[#283143] flex gap-2 *:text-gray-500">
        <Link
          to="/app/timeline"
          className="hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500"
        >
          Timeline
        </Link>
        <Link
          to="/app/@me/about"
          className="hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500"
        >
          About
        </Link>
      </div>
      <div className="*:border *:border-gray-400 *:py-2 *:w-28 *:rounded-lg *:bg-white dark:*:bg-[#151a23] dark:*:text-white dark:*:border-[#283143] flex gap-2 *:text-gray-500">
        <Link
          to="/app/@me/friends"
          className="hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500"
        >
          Friends
        </Link>
        <button className="hover:text-gray-700 text-sm font-medium hover:border-gray-500">
          Photos
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
