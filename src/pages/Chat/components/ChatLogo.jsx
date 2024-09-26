import { Link } from "react-router-dom";

const ChatLogo = () => {
  return (
    <Link to="/" className="w-14 flex-center flex-shrink-0 lg:mx-auto">
      <img src="/logo.svg" className="p-2.5" alt="logo" />
    </Link>
  );
};

export default ChatLogo;
