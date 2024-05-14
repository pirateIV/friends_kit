import { Timeline } from "flowbite-react";
import icons_2 from "@/assets/sprites/icon-sprites-2.png";
import { useSelector } from "react-redux";

import PostHeader from "./PostHeader";
import Button from "./Button";
import image from "C:/Users/Benjamin/Desktop/441878728_120210388485290683_7670975021207809707_n.jpg";

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#999",
  };
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

              <div className="post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-4 pt-2 dark:border-gray-700">
                <div>
                  <button style={buttonStyles}>
                    <i
                      data-visualcompletion="css-img"
                      className="x1b0d499 x1d69dk1"
                      style={{
                        backgroundImage: `url("${icons_2}")`,
                        backgroundPosition: "0px -718px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                        // opacity: "0.6",
                        filter: "contrast(0%)",
                      }}
                    ></i>
                    Like
                  </button>
                </div>
                <div>
                  <button style={buttonStyles}>
                    <i
                      data-visualcompletion="css-img"
                      className="x1b0d499 x1d69dk1"
                      style={{
                        backgroundImage: `url("${icons_2}")`,
                        backgroundPosition: "0px -529px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                        filter: "contrast(0%)",
                      }}
                    ></i>
                    Comment
                  </button>
                </div>
                <div>
                  <button style={buttonStyles}>
                    <i
                      data-visualcompletion="css-img"
                      className="x1b0d499 x1d69dk1"
                      style={{
                        backgroundImage: `url("${icons_2}")`,
                        backgroundPosition: "0px -865px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                        filter: "contrast(0%)",
                      }}
                    ></i>
                    Share
                  </button>
                </div>
              </div>
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  );
};
export default Feed;
