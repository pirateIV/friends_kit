import useCustomLocation from "@/hooks/useCustomLocation";
import Feed from "@/components/feed/Feed";
import { UserFriends, UserPhotos, UserSettings } from "./User";
import CreatePostBannner from "@/components/layout/posts/CreatePostBanner";

const PostsTab = () => {
  const isProfile = useCustomLocation("app/@me");

  return (
    <div className="grid grid-cols-12 w-full gap-5">
      <div className="flex flex-col gap-5 col-span-5">
        <UserPhotos />
        <UserFriends />
        {isProfile && <UserSettings />}
      </div>
      <div className="col-span-7">
        <CreatePostBannner />
        <Feed />
      </div>
    </div>
  );
};

export default PostsTab;
