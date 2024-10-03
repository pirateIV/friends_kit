import { socket } from "@/socket";
import { cn } from "@/lib/utils";
import { formatTime } from "@/helpers/formatDate";
import React, { useState } from "react";
import ChatBubbleDropdown from "./ChatBubbleDropdown";
import ChatBubbleTime from "./ChatBubbleTime";

const ChatBubble = (props) => {
  const { id, message, status, sender, timestamp } = props.content;

  const messageFromSelf = sender === socket.auth.userID;

  const chatBubbleStyles = cn(
    "relative grid grid-cols-2 text-white px-2",
    messageFromSelf
      ? "place-items-end col-start-2 grid-cols-[1fr_auto]"
      : "place-items-start col-start-1 grid-cols-[auto_1fr]",
  );

  return (
    <div className={chatBubbleStyles} onClick={() => console.log(props)}>
      <div
        className={cn(
          "relative z-10 ps-4 pb-0.5 pt-1.5 sm:pb-1 pe-[72px] sm:pe-20 border-t rounded-lg text-[13px] my-1 select-none shadow-sm shadow-gray-600 hover:opacity-95 dark:shadow-none",
          messageFromSelf
            ? "bg-[#3d70b2] border-[#558cd4]"
            : "min-w-32 bg-slate-500 border-slate-400",
        )}
      >
        {message.map((content, i) => (
          <React.Fragment key={i}>
            {status !== "deleted" ? (
              <div className="chat-bubble__message">{content}</div>
            ) : (
              <em className="text-xs opacity-55">
                You've deleted this message
              </em>
            )}
            <ChatBubbleTime time={formatTime(timestamp)} />
          </React.Fragment>
        ))}
      </div>
      {status === "sent" && (
        <ChatBubbleDropdown id={id} messageFromSelf={messageFromSelf} />
      )}
    </div>
  );
};

export default ChatBubble;
