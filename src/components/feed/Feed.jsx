import { Timeline } from "flowbite-react";
import icons_2 from "@/assets/sprites/icon-sprites-2.png";
import { useSelector } from "react-redux";

import PostHeader from "./PostHeader";
import Button from "./Button";

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="user-posts-list">
      <Timeline>
        {posts &&
          posts.map((post) => (
            <Timeline.Item
              key={post._id}
              className="bg-white shadow-mui-1 text-sm my-5 rounded-md dark:text-gray-200 dark:bg-[#1c232e]"
            >
              <PostHeader post={post} />

              <div className="px-4 mb-4">{post.content}</div>

              <div className="image">
                <img src={post.image} height="500" alt="" />
              </div>

              <Button iconUrl={icons_2} label="Like" />
              <Button iconUrl={icons_2} label="Comment" />
              <Button iconUrl={icons_2} label="Share" />
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  );
};
export default Feed;
