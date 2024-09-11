import { Link } from "react-router-dom";

const ChatLogo = () => {
  return (
    <Link to="/" className="w-14 flex-center mx-auto">
      <img src="/logo.svg" className="p-2.5" alt="logo" />
    </Link>
  );
};

export default ChatLogo;
