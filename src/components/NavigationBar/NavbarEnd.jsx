import "./index.css";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Profile from "../ui/Profile";
import UserSettings from "../ui/UserSettings";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import Avatar from "../common/Avatar";

const NavbarEnd = () => {
  const [isHidden, setisHidden] = useState(true);
  const user = useSelector(selectCurrentUser);
  const dropdownRef = useRef(null);

  const name = `${user.user.firstName} ${user.user.lastName}`;

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setisHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownRef]);

  return (
    <div className="relative navbar-end flex items-center gap-7 transition-all">
      {/* <div className="relative w-80 me-3">
        <input
          id="search"
          type="search"
          className="peer block w-full p-1.5 ps-12 text-sm bg-gray-100 border border-gray-100 rounded-full outline-none focus:bg-white focus:border focus:border-gray-300 focus:shadow-sm transition-03 dark:text-gray-50 dark:bg-[#283143] dark:border-[#283143]"
          placeholder="Search"
        />
        <div
          id="icon"
          className="absolute search-icon inset-y-0 start-0 flex items-center ps-3 text-gray-400 pointer-events-none peer-focus:text-blue-600 transition-03"
        >
          <SearchIcon />
          <span className="sr-only">Search icon</span>
        </div>
      </div> */}
      <div className="relative">
        <button id="user-avatar" onClick={() => setisHidden(!isHidden)}>
          <Avatar user={user.user} className="w-9 h-9 text-sm" status={false} />
        </button>
        <div
          ref={dropdownRef}
          id="dropdown"
          className={`${
            isHidden ? "hidden" : "flex"
          } flex-col justify-start absolute z-20 bg-white rounded-lg shadow w-[298px] top-[calc(100%+20px)] -right-4 dark:bg-[#171c26] dark:divide-gray-600`}
        >
          <div className="flex items-center justify-between p-4 text-sm text-gray-900 dark:text-white">
            <small className="text-gray-500 font-semibold uppercase">{`${name}`}</small>
            <ThemeSwitcher />
          </div>
          <Profile />
          <UserSettings />
          <div className="arrow absolute -top-1.5 right-6 h-3 w-3 transform rotate-45 bg-white dark:bg-[#171c26]"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEnd;
