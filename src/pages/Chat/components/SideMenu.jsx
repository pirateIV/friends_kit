import ThemeSwitcher from "@/shared/components/ThemeSwitcher";
import ChatLogo from "./ChatLogo";
import ChatTabButton from "./ChatTabButton";
import Avatar from "@/components/common/Avatar";
import { Link } from "react-router-dom";

const SideMenu = ({ user }) => (
  <div className="relative w-[100vw] h-[60px] lg:w-16 lg:min-h-screen side-menu order-last lg:order-first pb-4 pe-5 lg:px-0 pt-3 bg-[#2e2e2e]">
    <div className="h-full flex flex-1 lg:flex-col items-center justify-between">
      <ChatLogo />
      <div className="flex items-center w-full justify-center lg:justify-normal lg:flex-col">
        <ul
          role="tablist"
          className="flex lg:flex-grow-0 lg:flex-col items-center gap-10 sm:gap-14 lg:mt-8 lg:gap-8"
        >
          <Link to="/">
            <ChatTabButton title="Back to home" className="bx bx-home" />
          </Link>
          <ChatTabButton title="Profile" className="bx bx-user-circle" />
          <ChatTabButton title="Chats" className="bx bx-conversation" />
          <ChatTabButton title="Contacts" className="bx bxs-user-detail" />
          <ChatTabButton title="Settings" className="bx bx-cog" />
        </ul>
      </div>
      <div className="lg:w-full flex-center lg:flex-col gap-5">
        <ThemeSwitcher className="!relative p-3 rounded-full hidden md:block text-gray-100 bg-gray-700 hover:bg-gray-600 hover:text-gray-400 dark:!text-white" />
        <Avatar user={user} status={false} />
      </div>
    </div>
  </div>
);

export default SideMenu;
