import { useSelector } from "react-redux";

import { socket } from "@/socket";
import ChatBubble from "./components/ChatBubble";

const ChatConversation = () => {
  const { selectedUser, chatRoomUsers, userMessages } = useSelector(
    (state) => state.chatRoom,
  );

  const handleConversations = () => {
    let conversations = {};

    chatRoomUsers
      .filter((user) => user.id !== socket.auth.userID)
      .forEach((user) => {
        const messagesPerUser = userMessages.filter((message) => {
          const { sender, receiver } = message;
          return user.id === sender || user.id === receiver;
        });

        const privateMessages = userMessages.filter((message) => {
          const { sender, receiver } = message;
          return sender === receiver;
        });

        conversations[user.id] = messagesPerUser;
        conversations[socket.auth.userID] = privateMessages;
      });

    return conversations;
  };

  const messages = handleConversations()[selectedUser?.id];

  return (
    <div className="chat-conversation flex-1 p-4 lg:p-6">
      <div className="mt-20 px-4">
        {userMessages &&
          messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
      </div>
    </div>
  );
};

export default ChatConversation;
