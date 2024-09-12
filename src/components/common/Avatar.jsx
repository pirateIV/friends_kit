import { cn } from "@/lib/utils";
import { getRandomColor } from "@/helpers/getRandomColor";

const Avatar = ({ user, className, status = true }) => {
  return (
    <div className="relative">
      {user.avatar ? (
        <img
          src={user.avatar}
          className="rounded-full object-cover"
          height="30"
          width="30"
          alt={user.name}
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
      {status && (
        <span
          style={{ backgroundColor: user.online ? "green" : "red" }}
          className="bottom-0 left-7 absolute w-3.5 h-3.5 border-2 border-white rounded-full"
        ></span>
      )}
    </div>
  );
};

export default Avatar;
