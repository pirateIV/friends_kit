const ChatBubbleTime = ({ time }) => {
  return (
    <time
      dateTime={time}
      className="chat-bubble__timestamp"
      aria-label={`Message sent at ${time}`}
    >
      {time}
    </time>
  );
};

export default ChatBubbleTime;
