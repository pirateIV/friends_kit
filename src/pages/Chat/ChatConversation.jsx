import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { groupMessagesByDate } from "@/helpers";
import ChatBubble from "./components/ChatBubble";

const ChatConversation = () => {
  const dispatch = useDispatch();
  const { conversations, selectedUser } = useSelector(
    (state) => state.chatRoom,
  );
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);
  const [groupedMessages, setGroupedMessages] = useState({});

  const bottomRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      setSelectedUserMessages(conversations[selectedUser?.id] || []);
    }
  }, [selectedUser, conversations]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser, conversations]);

  useEffect(() => {
    if (selectedUserMessages) {
      setGroupedMessages(groupMessagesByDate(selectedUserMessages));
    }
  }, [selectedUserMessages]);

  return (
    <div className="chat-conversation p-4 lg:p-6 h-[calc(100vh-115px)] overflow-y-auto">
      <div className="mt-20 md:px-4">
        {Object.keys(groupedMessages).map((dateLabel) => (
          <React.Fragment key={dateLabel}>
            <div className="sticky top-20 my-10">
              <div className="relative w-24 mx-auto py-1 px-2 text-white text-xs text-center uppercase rounded-full z-20 bg-[#3d70b2]">
                {dateLabel}
              </div>
            </div>

            {groupedMessages[dateLabel].map((message) => (
              <ChatBubble key={message.id} content={message} />
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="p-2.5" ref={bottomRef}></div>
    </div>
  );
};

export default ChatConversation;
