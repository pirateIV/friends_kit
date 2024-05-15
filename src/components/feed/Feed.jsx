import {
  Avatar,
  Button as CommentButton,
  Textarea,
  Timeline,
} from "flowbite-react";
import { useSelector } from "react-redux";

import PostHeader from "./PostHeader";
import Button from "./Button";

import PostContent from "./PostContent";
import { useState } from "react";
import AvatarComponent from "./AvatarComponent";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

const Feed = () => {
  const { user } = useSelector(selectCurrentUser);
  const posts = useSelector((state) => state.posts.posts);
  const [comment, setComment] = useState("");
  const [showCommentBoxes, setShowCommentBoxes] = useState([]);

  const toggleCommentBox = (postId) => {
    setShowCommentBoxes((prevCommentBoxes) => {
      const updatedCommentBoxes = [...prevCommentBoxes];
      updatedCommentBoxes[postId] = !updatedCommentBoxes[postId];
      return updatedCommentBoxes;
    });
  };

  const postComment = (userId, postId) => {
    console.log({ userId, postId, comment });
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
              <Timeline.Point />
              <PostHeader post={post} />
              {!showCommentBoxes[post._id] ? (
                <>
                  <PostContent post={post} />

                  <div className="post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-4 pt-2 dark:border-gray-700">
                    <Button label="Like" position="0px -718px" />
                    <Button
                      label="Comment"
                      position="0px -529px"
                      handleClick={() => toggleCommentBox(post._id)}
                    />
                    <Button label="Share" position="0px -865px" />
                  </div>
                </>
              ) : (
                <div className="px-3.5 pb-3.5 ">
                  <div className="!border-gray-900 *:p-3 *:outline-none">
                    <Textarea
                      onKeyUp={(e) =>
                        e.key === "Escape" && setShowCommentBoxes([])
                      }
                      rows="6"
                      placeholder="Write a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="peer !bg-gray-100 focus:border-gray-400 dark:!bg-[#252e3b] dark:focus:!border-blue-600"
                      autoFocus
                    ></Textarea>
                    <div className="border border-t-0 border-gray-300 dark:border-gray-600 peer-focus:border-gray-400 comment-footer flex items-center justify-between h-14 bg-gray-300 dark:bg-[#1c232e] -translate-y-3 rounded-b-md dark:peer-focus:!border-blue-600">
                      <AvatarComponent />
                      <div className="comment-buttons space-x-2">
                        <button
                          onClick={() => postComment(user.id, post._id)}
                          className="p-2.5 rounded-md text-white bg-blue-700 border-t outline-none border-blue-500 dark:border-blue-400 hover:bg-blue-600 ring-offset-1 focus:ring focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400"
                          disabled={!comment}
                        >
                          {!comment ? "Enter Comment..." : "Post Comment"}
                        </button>
                        <button
                          className="p-2.5 text-white rounded-md border-t border-red-500 dark:border-red-200 bg-red-500"
                          onClick={() => setShowCommentBoxes([])}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  );
};
export default Feed;
