import ThemeSwitcher from "@/shared/components/ThemeSwitcher";
import ChatLogo from "./ChatLogo";
import ChatTabButton from "./ChatTabButton";

const SideMenu = () => (
  <div className="relative side-menu w-16 pb-4 bg-[#2e2e2e]">
    <div className="h-full flex flex-1 flex-col items-center justify-between">
      <div>
        <ChatLogo />
        <ul role="tablist" className="flex flex-col items-center mt-5 gap-5">
          <ChatTabButton className="bx-user-circle" />
          <ChatTabButton className="bx-conversation" />
          <ChatTabButton className="bx-user-detail" />
          <ChatTabButton className="bx-cog" />
        </ul>
      </div>
      <div className="w-full flex-center flex-col gap-5">
        <ThemeSwitcher className="!relative p-3 rounded-full text-gray-100 bg-gray-700 hover:bg-gray-600 hover:text-gray-400 dark:!text-white" />
        {/* Avatar or other component */}
      </div>
    </div>
  </div>
);

export default SideMenu;
