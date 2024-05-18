import useCustomLocation from "@/hooks/useCustomLocation";
import { AvatarComponent } from ".";
import { formatPostCreatedTime, formatPostDate } from "@/helpers/formatDate";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

const PostHeader = ({ post }) => {
  const isProfile = useCustomLocation("app/@me");
  const { name } = useSelector(selectCurrentUser);

  return (
    <div className="post-header p-4 mb-1">
      <header className="mini-post-header flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AvatarComponent />
          <div>
            <h5 className="header-title font-medium dark:font-normal">
              {isProfile ? "You" : name}
            </h5>
            <p className="text-gray-500">{formatPostDate(post.createdAt)}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PostHeader;
