import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { getRandomColor } from "@/helpers/getRandomColor";

const ProfileSidebarAvatar = () => {
  const { selectedUser } = useSelector((state) => state.chatRoom);

  return selectedUser.avatar ? (
    <img
      src={selectedUser.avatar}
      alt={selectedUser.firstName}
      className="w-full h-52 lg:h-[250px] rounded-md object-cover"
    />
  ) : (
    <div
      className={cn(
        "flex items-center justify-center h-52 lg:h-[250px] rounded-md",
        getRandomColor(selectedUser.firstName),
      )}
    >
      <span className="text-4xl text-white font-semibold">
        {selectedUser.firstName.charAt(0)}
        {selectedUser.lastName.charAt(0)}
      </span>
    </div>
  );
};

export default ProfileSidebarAvatar;
