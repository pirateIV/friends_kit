const ChatMessageList = () => (
  <ul>
    {[
      {
        name: "Marguerite Campbell",
        imgSrc: "avatar-4.474927d6a33a7b8cde52.jpg",
        active: true,
      },
      {
        name: "Katrina Winters",
        imgSrc: "avatar-3.6256d30dbaad2b8f4e60.jpg",
        active: false,
      },
      // Add other users here
    ].map((user, index) => (
      <li
        key={index}
        className={`active py-1.5 px-6 transition-all duration-300 ${
          user.active ? "bg-green-600" : "hover:bg-gray-200"
        }`}
      >
        <a href="/dashboard">
          <div className="flex items-center">
            <div className="chat-user-img me-2 ms-0 online">
              <img
                src={`https://doot-dark.react.themesbrand.com/static/media/${user.imgSrc}`}
                className="rounded-full object-cover"
                height="30"
                width="30"
                alt={user.name}
              />
              <span className="user-status"></span>
            </div>
            <div className="overflow-hidden">
              <p
                className={`text-sm ${user.active ? "text-white" : "text-gray-700"} mb-0`}
              >
                {user.name}
              </p>
            </div>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default ChatMessageList;
