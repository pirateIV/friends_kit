import { socket } from "@/socket";
import { useEffect } from "react";
import ChatRoomList from "./components/ChatRoomList";
import SearchBox from "./components/SearchBox";
import SideMenu from "./components/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileInfo } from "@/features/auth/reducers/user/userProfileSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  console.log(user);
  useEffect(() => {
    // dispatch(getUserProfileInfo());

    if (user) {
      socket.auth = { userID: user.id };
      socket.connect();
    }
  }, [dispatch]);

  return (
    <div className="bg-white min-h-screen grid grid-cols-[auto_auto_1fr] dark:bg-gray-700">
      <SideMenu />

      <div className="chat-left-sidebar">
        <header className="p-4">
          <h1 className="text-2xl text-gray-800 font-medium">Chats</h1>
          <SearchBox />
        </header>

        <ChatRoomList />
      </div>

      <div>{/* Chat content area */}</div>
    </div>
  );
};

export default Chat;
