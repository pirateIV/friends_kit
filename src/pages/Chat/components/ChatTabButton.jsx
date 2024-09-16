const ChatTabButton = ({ className, title }) => {
  return (
    <li
      role="tab"
      className="flex-center w-full text-white/50 text-[26px] hover:text-white/80"
    >
      <button title={title} className={className}></button>
    </li>
  );
};

export default ChatTabButton;
