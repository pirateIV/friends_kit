import { Timeline } from "flowbite-react";
import icons_2 from "@/assets/sprites/icon-sprites-2.png";
import { useSelector } from "react-redux";

import PostHeader from "./PostHeader";
import Button from "./Button";
import image from "C:/Users/Benjamin/Desktop/441878728_120210388485290683_7670975021207809707_n.jpg";

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

              <div className="image h-[450px]">
                <img
                  src={image}
                  height="300"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>

              <div className="flex items-center justify-center *:flex-1 *:gap-3 gap-3 *:text-sm text-gray-600 *:flex-center *:py-1 *:rounded-md pt-1">
                <Button iconUrl={icons_2} label="Like" />
                <Button iconUrl={icons_2} label="Comment" />
                <Button iconUrl={icons_2} label="Share" />
              </div>
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  );
};
export default Feed;
