import { socket } from "@/socket";
import { useEffect, useState } from "react";
import ChatRoomList from "./components/ChatRoomList";
import SideMenu from "./components/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  setChatRoomUsers,
  setUserConnection,
  setUserConversations,
} from "@/features/auth/reducers/chat/chatSlice";
import ChatInputSection from "./components/ChatInputSection";
import UserProfileSidebar from "./components/UserProfileSidebar";
import ChatTopHeader from "./components/ChatTopHeader";
import UserChatContainer from "./UserChat";
import ChatConversation from "./ChatConversation";

const Chat = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

  const handleOnUsers = (user) => {
    const roomUsers = [{ ...user, online: true }, ...user.friends].map(
      (user) => ({
        ...user,
        self: socket.auth.userID === user.id,
        online: user.online,
      }),
    );
    dispatch(setChatRoomUsers(roomUsers));
  };

  useEffect(() => {
    socket.auth = { userID: user.id, username: user.firstName };
    socket.connect();

    handleOnUsers(user);

    socket.on("user connected", (user) => {
      dispatch(setUserConnection(user));
    });

    socket.on("user disconnected", (user) => {
      dispatch(setUserConnection(user));
    });

    socket.on("private message", (message) => {
      dispatch(setUserConversations(message));
    });

    socket.on("previousMessages", (messages) => {
      dispatch(setUserConversations(messages));
    });

    socket.on("connection message", (message) => {
      console.log(message);
    });

    return () => {
      socket.off("user connected");
      socket.off("user disconnected");
      socket.off("private message");
    };
  }, []);

  return (
    <div className="flex">
      <div className="flex-1 flex-row bg-[#f2f2f2] max-h-screen overflow-hidden grid lg:grid-cols-[auto_auto_1fr] dark:bg-[#2e2e2e]">
        <SideMenu user={user} />
        <ChatRoomList />

        <UserChatContainer>
          <div className="relative flex flex-col w-full h-full transition duration-300">
            <ChatTopHeader />
            <ChatConversation />
            <ChatInputSection />
          </div>
          <UserProfileSidebar />
        </UserChatContainer>
      </div>
    </div>
  );
};

export default Chat;
