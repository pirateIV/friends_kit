import ThemeSwitcher from "@/shared/components/ThemeSwitcher";
import ChatLogo from "./ChatLogo";
import ChatTabButton from "./ChatTabButton";
import Avatar from "@/components/common/Avatar";
import { Link } from "react-router-dom";

const SideMenu = ({ user }) => (
  <div className="relative side-menu w-16 pb-4 pt-3 bg-[#2e2e2e]">
    <div className="h-full flex flex-1 flex-col items-center justify-between">
      <div>
        <ChatLogo />
        <ul role="tablist" className="flex flex-col items-center mt-8 gap-8">
          <Link to="/">
            <ChatTabButton title="Back to home" className="bx bx-home" />
          </Link>
          <ChatTabButton title="Profile" className="bx bx-user-circle" />
          <ChatTabButton title="Chats" className="bx bx-conversation" />
          <ChatTabButton title="Contacts" className="bx bxs-user-detail" />
          <ChatTabButton title="Settings" className="bx bx-cog" />
        </ul>
      </div>
      <div className="w-full flex-center flex-col gap-5">
        <ThemeSwitcher className="!relative p-3 rounded-full text-gray-100 bg-gray-700 hover:bg-gray-600 hover:text-gray-400 dark:!text-white" />
        <Avatar user={user} status={false} />
      </div>
    </div>
  </div>
);

export default SideMenu;
