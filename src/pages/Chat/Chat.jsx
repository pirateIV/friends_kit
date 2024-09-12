import { socket } from "@/socket";
import { useEffect, useState } from "react";
import ChatRoomList from "./components/ChatRoomList";
import SearchBox from "./components/SearchBox";
import SideMenu from "./components/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { setChatRoomUsers } from "@/features/auth/reducers/chat/chatSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [friends, setFriends] = useState([]);
  const { chatRoomUsers } = useSelector((state) => state.chatRoom);

  const handleOnUsers = (user) => {
    const roomUsers = [user.user, ...user.user.friends].map((user) => ({
      ...user,
      self: socket.auth.userID === user.id,
      online: user.online,
    }));
    dispatch(setChatRoomUsers(roomUsers));
  };

  const setUserConnection = (user) => {
    const updatedUsers = chatRoomUsers.map((friend) =>
      friend.id === user.id
        ? { ...friend, self: socket.auth.userID === id, online: user.online }
        : friend,
    );
    dispatch(setChatRoomUsers(updatedUsers));
  };

  useEffect(() => {
    if (user) {
      socket.auth = { userID: user.user.id, username: user.name };
      socket.connect();

      handleOnUsers(user);

      socket.on("user connected", (user) => {
        setUserConnection(user);
      });

      socket.on("user disconnected", ({ userID }) => {
        setUserConnection(user);
      });
    }
  }, []);

  return (
    <div className="bg-white min-h-screen grid grid-cols-[auto_auto_1fr] dark:bg-gray-700">
      <SideMenu />

      <div className="chat-left-sidebar">
        <header className="p-4">
          <h1 className="text-2xl text-slate-800 font-medium">Chats</h1>
          <SearchBox />
        </header>

        <ChatRoomList />
      </div>

      <div className="bg-slate-200">{/* Chat content area */}</div>
    </div>
  );
};

export default Chat;
