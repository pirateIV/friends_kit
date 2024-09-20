import { socket } from "@/socket";
import { cn } from "@/lib/utils";
import { formatTime } from "@/helpers/formatDate";

const ChatBubble = (props) => {
  const { message, sender, timestamp } = props.message;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 text-white",
        socket.auth.userID === sender
          ? "place-items-start col-start-1 grid-cols-[auto_1fr]"
          : "place-items-end col-start-2 grid-cols-[1fr_auto]",
      )}
    >
      <div
        className={cn(
          "relative ps-5 px-4 pt-2 pb-3 border-t rounded-lg text-sm mb-2 shadow-sm shadow-gray-600 hover:opacity-95 dark:shadow-none",
          socket.auth.userID === sender
            ? "min-w-32 bg-slate-500 border-slate-400"
            : "bg-[#3d70b2] border-[#558cd4]",
        )}
      >
        {message.map((content, i) => (
          <div key={i} className="pb-2.5">
            {content}
          </div>
        ))}
        <time
          className="absolute end-5 bottom-1 text-xs text-end opacity-70 font-serif"
          dateTime={formatTime(timestamp)}
        >
          {formatTime(timestamp)}
        </time>
      </div>
    </div>
  );
};

export default ChatBubble;
