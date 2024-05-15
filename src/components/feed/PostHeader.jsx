import { AvatarComponent } from ".";
import { formatPostCreatedTime, formatPostDate } from "@/helpers/formatDate";

const PostHeader = ({ post }) => {
  return (
    <div className="post-header p-4 mb-1">
      <header className="mini-post-header flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AvatarComponent />
          <div>
            <h5 className="header-title font-medium dark:font-normal">You</h5>
            <p className="text-gray-500">{formatPostDate(post.createdAt)}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PostHeader;
