import { cn } from "@/lib/utils";
import { getRandomColor } from "@/helpers/getRandomColor";

const Avatar = ({ user, selectedUser, className, status = true }) => {
  const updateUserStatusStyle = (user) =>
    user.online ? "var(--color-online)" : "var(--color-offline)";

  return (
    <div className="relative">
      {user.avatar ? (
        <img
          width="40"
          height="40"
          alt={user.name}
          src={user.avatar}
          className="rounded-full object-cover"
        />
      ) : (
        <div
          className={cn(
            "relative inline-flex items-center justify-center w-10 h-10 rounded-full",
            getRandomColor(user.firstName),
            className,
          )}
        >
          <span className="font-medium text-white">
            {user.firstName.charAt(0)}
          </span>
        </div>
      )}
      {Boolean(status) && (
        <span
          style={{ backgroundColor: updateUserStatusStyle(user) }}
          className="bottom-0 left-7 absolute w-3.5 h-3.5 border-2 rounded-full border-white dark:border-[#262626]"
        ></span>
      )}
    </div>
  );
};

export default Avatar;
