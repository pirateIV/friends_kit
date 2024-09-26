import { socket } from "@/socket";
import { cn } from "@/lib/utils";
import { formatTime } from "@/helpers/formatDate";

const ChatBubble = (props) => {
  const { message, sender, timestamp } = props.message;

  const messageFromSelf = sender === socket.auth.userID;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 text-white",
        messageFromSelf
          ? "place-items-end col-start-2 grid-cols-[1fr_auto]"
          : "place-items-start col-start-1 grid-cols-[auto_1fr]",
      )}
    >
      <div
        className={cn(
          "relative ps-4 pb-0.5 pt-1.5 sm:pb-1 pe-[72px] sm:pe-20 border-t rounded-lg text-[13px] mb-2 shadow-sm shadow-gray-600 hover:opacity-95 dark:shadow-none",
          messageFromSelf
            ? "bg-[#3d70b2] border-[#558cd4]"
            : "min-w-32 bg-slate-500 border-slate-400",
        )}
      >
        {message.map((content, i) => (
          <div
            key={i}
            className="text-[11px] md:text-[13px] pb-2 sm:pb-2.5 font-montaga"
          >
            {content}
          </div>
        ))}
        <time
          className="absolute end-4 bottom-0.5 text-[9px] md:text-[11px] text-end opacity-70"
          dateTime={formatTime(timestamp)}
        >
          {formatTime(timestamp)}
        </time>
      </div>
    </div>
  );
};

export default ChatBubble;
