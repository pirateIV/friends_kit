import { useDispatch, useSelector } from "react-redux";
import { handleUserName } from "@/helpers";
import Avatar from "@/components/common/Avatar";
import { setShowUserInfo } from "@/features/auth/reducers/chat/chatSlice";
import { cn } from "@/lib/utils";

const ChatTopHeader = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.chatRoom);

  return (
    <header className="user-chat-topbar absolute top-0 inset-x-0 z-30 bg-gray-200/50 [@supports(backdrop-filter:blur(5px))]:backdrop-blur py-5 px-8  border-b border-[#eaeaf1]  dark:border-[#333] dark:bg-[#2e2e2e80]">
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <Avatar
            user={selectedUser}
            status={false}
            className="w-10 h-10 flex-shrink-0"
          />

          <div className="ms-3">
            <p className="text-slate-700 text-base md:text-lg font-medium dark:text-white/70">
              {handleUserName(selectedUser)}
            </p>
            <p
              className={cn(
                "text-xs text-black/60 font-medium ",
                selectedUser.online
                  ? "text-amber-500 dark:text-amber-300"
                  : "text-red-500 dark:text-red-400",
              )}
            >
              {selectedUser.online ? "online" : "away"}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => dispatch(setShowUserInfo())}
          className="user-profile-show text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <i className="bx bxs-info-circle"></i>
        </button>
      </div>
    </header>
  );
};

export default ChatTopHeader;
