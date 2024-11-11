import { cn } from "@/lib/utils";
import { getRandomColor } from "@/helpers/getRandomColor";

const Avatar = ({ user, selectedUser, className, status = true }) => {
  const updateUserStatusStyle = (user) =>
    user.online ? "var(--color-online)" : "var(--color-offline)";

  return (
    <div className="relative">
      {user?.avatar ? (
        <div className="w-8 h-8 md:w-9 md:h-9 lg:h-10 lg:w-10">
          <img
            alt={user.name}
            src={user?.avatar}
            className="rounded-full object-cover"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full",
            getRandomColor(user?.firstName),
            className,
          )}
        >
          <span className="text-sm lg:text-base font-medium text-white">
            {user?.firstName?.charAt(0)}
          </span>
        </div>
      )}
      {Boolean(status) && (
        <span
          style={{ backgroundColor: updateUserStatusStyle(user) }}
          className="bottom-0 left-6 lg:left-7 absolute  w-3 h-3 lg:w-3.5 lg:h-3.5 border-2 rounded-full border-white dark:border-[#262626]"
        ></span>
      )}
    </div>
  );
};

export default Avatar;
