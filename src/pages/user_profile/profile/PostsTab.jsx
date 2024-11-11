import useCustomLocation from "@/hooks/useCustomLocation";
import Feed from "@/components/feed/Feed";
import { UserFriends, UserPhotos, UserSettings } from "./User";
import CreatePostBannner from "@/components/layout/posts/CreatePostBanner";

const PostsTab = () => {
  const isProfile = useCustomLocation("@me");

  return (
    <div className="grid grid-cols-12 w-full gap-5 px-5 md:px-10">
      <div className="sticky top-20 flex-col gap-5 col-span-5 hidden md:flex">
        <UserPhotos />
        <UserFriends />
        {isProfile && <UserSettings />}
      </div>
      <div className="col-span-12 md:col-span-7">
        <CreatePostBannner />
        <Feed />
      </div>
    </div>
  );
};

export default PostsTab;
