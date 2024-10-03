import { useState } from "react";
import ChatMessageList from "./ChatMessageList";
import SearchBox from "./SearchBox";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "@/features/auth/reducers/chat/chatSlice";

const ChatRoomList = () => {
  const dispatch = useDispatch();
  const { selectedUser, sidebarOpen } = useSelector((state) => state.chatRoom);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn(
        "chat-left-sidebar absolute lg:static transition duration-300 z-[999]",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <header className="p-5">
        <h1 className="font-sans text-2xl text-slate-800 dark:text-white font-bold">
          Chats
        </h1>

        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {selectedUser && (
          <button
            onClick={() => dispatch(setSidebarOpen(false))}
            className="bx bx-x absolute top-5 right-5 text-xl dark:text-white hover:opacity-70 lg:hidden"
          ></button>
        )}
      </header>

      <div className="chat-room-list">
        <div id="chat-room-favourites">
          <h5 className="uppercase mt-4 mb-3  ps-5 text-11 text-slate-600 dark:text-white/80 font-semibold">
            Favourites
          </h5>
          <p className="px-4 py-2 text-sm text-gray-400 dark:text-opacity-80 ms-2">
            <em>No favourites yet.</em>
          </p>
        </div>

        <div id="chat-room-direct-messages">
          <h5 className="uppercase mt-4 mb-3 ps-5  text-11 text-slate-600 dark:text-white/80 font-semibold">
            Direct Messages
          </h5>

          <ChatMessageList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};
export default ChatRoomList;
