import { useDispatch, useSelector } from "react-redux";
import ChatBubble from "./components/ChatBubble";
import { useEffect, useState } from "react";
import { socket } from "@/socket";

const ChatConversation = () => {
  const dispatch = useDispatch();
  const { conversations, selectedUser } = useSelector(
    (state) => state.chatRoom,
  );
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);

  useEffect(() => {
    if (selectedUser) {
      setSelectedUserMessages(conversations[selectedUser?.id] || []);
    }
  }, [selectedUser, conversations]);

  // useEffect(() => {
  //   socket.on("private message", (message) => {
  //     setSelectedUserMessages((prev) => [...prev, message]);
  //   });
  // }, []);

  return (
    <div className="chat-conversation p-4 lg:p-6 h-[calc(100vh-115px)] overflow-y-scroll">
      <div className="mt-20 md:px-4">
        {selectedUserMessages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatConversation;
