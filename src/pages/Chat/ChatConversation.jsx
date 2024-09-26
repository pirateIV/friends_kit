import { useDispatch, useSelector } from "react-redux";
import ChatBubble from "./components/ChatBubble";
import { useEffect, useRef, useState } from "react";
import { socket } from "@/socket";

const ChatConversation = () => {
  const dispatch = useDispatch();
  const { conversations, selectedUser } = useSelector(
    (state) => state.chatRoom,
  );
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      setSelectedUserMessages(conversations[selectedUser?.id] || []);
    }
  }, [selectedUser, conversations]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser, conversations]);

  return (
    <div className="chat-conversation p-4 lg:p-6 h-[calc(100vh-115px)] overflow-y-auto">
      <div className="mt-20 md:px-4">
        {selectedUserMessages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>

      <div className="mt-5" ref={bottomRef}></div>
    </div>
  );
};

export default ChatConversation;
